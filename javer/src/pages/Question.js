import React from "react";
import Board from "../components/Board";
import { Grid } from "@material-ui/core";
import qa from "../images/Q&A.png";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

const Question = () => {
  const datas = [
    {
      id: 1,
      title: "재테크 추천 좀 해주세요!",
      content: "사회 초년생인데 할만한 재테크 없을까요?",
      like: 0,
      view: 0,
      date: 191231
    },
    {
      id: 2,
      title: "여기 머하는 곳임?",
      content: "재테크로 돈 많이 범?",
      like: 0,
      view: 0,
      date: 200101
    },
    {
      id: 3,
      title: "어떻게 해야할까",
      content: "지금 주식이랑 코인중에 어디에 투자할지 고민중입니다",
      like: 0,
      view: 0,
      date: 200121
    }
  ];
  return (
    <Grid container style={{ marginTop: "10px" }}>
      <Grid item xs={12}>
        <img src={qa} alt="" height="80px" />
      </Grid>
      <Grid item xs={8}>
        {datas.map(data => (
          <Board one={data} />
        ))}
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};

export default Question;
