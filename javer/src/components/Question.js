import React from "react";
// import Board from "./Board";
// import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Question = () => {
  const datas = [
    {
      id: 1,
      title: "재테크 추천 좀 해주세요!",
      content: "사회 초년생인데 할만한 재테크 없을까요?",
      like: 0,
      view: 0
    },
    {
      id: 2,
      title: "여기 머하는 곳임?",
      content: "재테크로 돈 많이 범?",
      like: 0,
      view: 0
    },
    {
      id: 3,
      title: "어떻게 해야할까",
      content: "지금 주식이랑 코인중에 어디에 투자할지 고민중입니다",
      like: 0,
      view: 0
    }
  ];
  return (
    <TableContainer comopnent={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">번호</TableCell>
            <TableCell align="center">제목</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map(data => (
            // <Board key={data.id} one={data} />
            <TableRow key={data.id}>
              <TableCell align="center">{data.id}</TableCell>
              <TableCell align="center">{data.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Question;
