import React, { useState } from "react";
import axios from "axios";

// const datas = [
//   {
//     id: 1,
//     title: "제에모옥",
//     content: "느아"
//   },
//   {
//     id: 2,
//     title: "제목",
//     content: "내용"
//   }
// ];
// const datas = ["hi", "hello"];

const News = () => {
  const URL = "http://127.0.0.1/user";
  const [datas, setDatas] = useState([]);
  axios
    .get(URL)
    .then(res => {
      setDatas(res.data.article);
    })
    .catch(e => {
      console.log(e);
    });
  return datas.map(data => (
    <div key={data}>
      <h4>{data}</h4>
    </div>
  ));

  // return datas.map(data => (
  //   <div>
  //     <h1>{data}</h1>
  //   </div>
  // ));
};

export default News;
