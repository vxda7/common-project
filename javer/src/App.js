import React from "react";
import { Route } from "react-router-dom";
import {
  Button,
  AppBar,
  Toolbar,
  // IconButton,
  Typography
} from "@material-ui/core";
import Stock from "./components/Stock";
import Home from "./components/Home";
import Estate from "./components/Estate";
import Question from "./components/Question";
// import MenuIcon from "@material-ui/icons/Menu";

const App = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* <IconButton
              edge="start"
              className={"hi"}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
          <a href="/">
            <Typography variant="h6" className={"yo"}>
              JAVER
            </Typography>
          </a>
          <a href="/stock">
            <Button color="inherit">주식</Button>
          </a>
          <a href="/estate">
            <Button color="inherit">부동산</Button>
          </a>
          <Button color="inherit">펀드</Button>
          <Button color="inherit">코인</Button>
          <a href="/question">
            <Button color="inherit">Q&A</Button>
          </a>
        </Toolbar>
      </AppBar>
      <Route path="/" component={Home} exact={true} />
      <Route path="/stock" component={Stock} />
      <Route path="/estate" component={Estate} />
      <Route path="/question" component={Question} />
    </div>
  );
};

export default App;
