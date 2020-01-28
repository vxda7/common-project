import React, { useState } from "react";
import { Grid, Button, Icon, TextField } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import MessageIcon from "@material-ui/icons/Message";
import styled from "styled-components";
// import qa from "../images/Q&A.png";
// import questionicon from "../images/questionicon.png";
// import axios from "axios";
const StyledIcon = styled(Icon)`
  margin-right: 20px;
  &:hover {
    cursor: pointer;
  }
`;

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

const DetailQuestion = ({ match }) => {
  // eslint-disable-next-line no-unused-expressions
  const [qbool, setQbool] = useState(false);

  const qcomment = () => {
    if (qbool) {
      setQbool(false);
    } else {
      setQbool(true);
    }
  };

  const showqment = one => {
    if (one) {
      return (
        <div style={{ marginBottom: "20px" }}>
          <TextField
            multiline
            rows="6"
            variant="outlined"
            style={{
              backgroundColor: "#fafafa",
              width: "100%",
              marginBottom: "10px"
            }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" color="primary">
              등록
            </Button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      style={{ marginTop: "10px" }}
    >
      <Grid>
        <h1>JAVER Q&A</h1>
      </Grid>
      <Grid
        style={{
          border: "1px solid #c8d0d0",
          borderRadius: "5px",
          width: "100%"
        }}
      >
        <div style={{ marginLeft: "10%", marginRight: "5%" }}>
          <h1>{datas[match.params.id - 1].title}</h1>
          <hr style={{ border: "0.5px solid #c8d0d0" }} />
          <br />
          <p>{datas[match.params.id - 1].content}</p>
          <br />
          <hr style={{ border: "0.5px solid #c8d0d0" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              marginTop: "2%",
              marginBottom: "2% "
            }}
          >
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center"
              }}
            >
              <Icon
                component={ErrorIcon}
                style={{ height: "15px", marginTop: "10px" }}
              />
              <p style={{ fontSize: "10px" }}>여러분의 지식을 나눠주세요!</p>
            </div>
            <div
              style={{
                display: "flex",
                textAlgin: "center",
                alignItems: "center"
              }}
            >
              <StyledIcon onClick={qcomment} component={MessageIcon} />

              <Button variant="contained" color="primary">
                답변하기
              </Button>
            </div>
          </div>
          {showqment(qbool)}
        </div>
      </Grid>
      <Grid container justify="flex-end" style={{ marginTop: "2%" }}>
        <Button variant="contained" href="./" style={{ marginRight: "2%" }}>
          목록
        </Button>
      </Grid>
    </Grid>
  );
};

export default DetailQuestion;
