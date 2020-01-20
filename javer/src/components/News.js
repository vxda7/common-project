import React from "react";
// import axios from "axios";

const datas = [
  {
    id: 1,
    title: "제에모옥",
    content: "느아"
  },
  {
    id: 2,
    title: "제목",
    content: "내용"
  }
];

const News = () => {
  // const URL = "";
  // const datas = axios.get(URL);
  // console.log(datas);

  return datas.map(data => (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  ));
};

export default News;
