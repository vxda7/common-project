import React from "react";
import { Grid } from "@material-ui/core";

import { Link, Route } from "react-router-dom";
import News from "./News";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Substock from "./Substock";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

const Home = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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
          "background-color": "lightblue",
          height: "30rem",
          width: "100%"
        }}
      >
        ㅎㅇㅎㅇ
      </Grid>
      <Grid
        justify="center"
        style={{
          "background-color": "gray",
          height: "30rem",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "white"
          }}
        >
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <Link to="/home">
              <BottomNavigationAction label="News" icon={<RestoreIcon />} />
            </Link>
            <Link to="/home/substock">
              <BottomNavigationAction label="Stock" icon={<FavoriteIcon />} />
            </Link>
            <Link to="/home/subcoin">
              <BottomNavigationAction label="Coin" icon={<LocationOnIcon />} />
            </Link>
          </BottomNavigation>
        </div>
        <Route path="/home" exact component={News} />
        <Route path="/home/substock" component={Substock} />
      </Grid>
      <Grid
        style={{
          "background-color": "light  blue",
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
