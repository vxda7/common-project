import React from "react";
import { Grid } from "@material-ui/core";
import questionicon from "../images/questionicon.png";

const Board = ({ one }) => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      style={{
        border: "1px solid #c8d0d0",
        borderRadius: "15px",
        marginTop: "5px"
      }}
    >
      <Grid item xs={1}>
        <img
          src={questionicon}
          alt=""
          style={{
            width: "60%",
            height: "auto",
            marginTop: "25%",
            marginLeft: "25%"
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <div>
          <h2>{one.title}</h2>
          <p>{one.content}</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Board;
