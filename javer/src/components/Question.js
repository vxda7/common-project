import React from "react";
import Board from "./Board";

const Question = () => {
  const datas = [
    {
      id: 1,
      title: "재테크 추천 좀 해주세요!",
      content: "사회 초년생인데 할만한 재테크 없을까요?"
    },
    {
      id: 2,
      title: "여기 머하는 곳임?",
      content: "재테크로 돈 많이 범?"
    },
    {
      id: 3,
      title: "어떻게 해야할까",
      content: "지금 주식이랑 코인중에 어디에 투자할지 고민중입니다"
    }
  ];
  return (
    <div>
      <h1>게시판</h1>
      <p>각종 게시물</p>
      {datas.map(data => (
        <Board key={data.id} one={data} />
      ))}
    </div>
  );
};

export default Question;
