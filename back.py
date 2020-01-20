from flask import Flask
from flask_restful import Resource, Api
from flask_restful import reqparse
import requests
from urllib.request import urlopen
import bs4
app = Flask(__name__)
api = Api(app)


class CreateUser(Resource):
    def get(self):
        try:
            url = "https://news.naver.com/main/list.nhn?mode=LS2D&mid=shm&sid1=101&sid2=259"
            html = urlopen(url)
            bs_obj = bs4.BeautifulSoup(html.read(), "html.parser")
            ul = bs_obj.find("ul", {"class": "type06_headline"})
            lis = ul.findAll("li")
            file_data = dict()
            number = 0
            for li in lis:
                number = number + 1
                txt = li.find("dt", {"class": ""}).find("a").text.strip()
                file_data["article"+str(number)] = txt
                print(txt)
            return file_data
        except Exception as e:
            return {'error': str(e)}


api.add_resource(CreateUser, '/user')
if __name__ == '__main__':
    app.run(debug=True)
