import React from "react";

const Board = ({ one }) => {
  return (
    <div>
      <h1>{one.title}</h1>
      <p>{one.content}</p>
    </div>
  );
};

export default Board;
