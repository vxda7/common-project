import React from "react";
import { Grid } from "@material-ui/core";

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      background="black"
    >
      <Grid
        style={{
          "background-color": "green",
          height: "30rem",
          width: "100%"
        }}
      >
        ㅎㅇㅎㅇ
      </Grid>
      <Grid
        style={{
          "background-color": "blue",
          height: "30rem",
          width: "100%"
        }}
      >
        ㅎㅎㅎㅎ
      </Grid>
      <Grid
        style={{
          "background-color": "yellow",
          height: "30rem",
          width: "100%"
        }}
      >
        ㅇㅇㅇㅇ
      </Grid>
    </Grid>
  );
};

export default Home;
