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
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

// import MenuIcon from "@material-ui/icons/Menu";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    display: "flex",
    justifyContent: "center"
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const useModalStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

const App = () => {
  const classes = useStyles();
  const modalclasses = useModalStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <AppBar position="fixed" color="light">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div style={{ marginLeft: "8%" }}>
            <Button href="/home">
              <Typography
                variant="h6"
                className={"yo"}
                style={{ color: "blue" }}
              >
                JAVER
              </Typography>
            </Button>
            {/* </a> */}
            <Button color="inherit" href="/stock">
              주식
            </Button>

            <Button color="inherit" href="/estate">
              부동산
            </Button>

            <Button color="inherit" href="/fund">
              펀드
            </Button>
            <Button color="inherit" href="/coin">
              코인
            </Button>

            <Button color="inherit" href="/question">
              Q&A
            </Button>
          </div>
          <div style={{ marginRight: "10%", color: "blue" }}>
            <Button color="inherit" onClick={handleOpen}>
              로그인
            </Button>
          </div>

          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2 id="simple-modal-title">로그인</h2>
              <p id="simple-modal-description">
                {/* 여기 form 태그 로그인 모달창 내부 */}
                <form
                  className={modalclasses.root}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="id"
                      label="Id"
                      variant="outlined"
                      style={{ marginBottom: "5%" }}
                    />
                    <TextField
                      id="password"
                      label="Password"
                      variant="outlined"
                      type="password"
                    />
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button type="submit">로그인</Button>
                  </div>
                </form>
              </p>
            </div>
          </Modal>
        </Toolbar>
      </AppBar>
      {/* <Route path="/" component={Home} exact={true} /> */}
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Route path="/home" component={Home} />
        <Route path="/stock" component={Stock} />
        <Route path="/estate" component={Estate} />
        <Route path="/question" component={Question} />
      </div>
    </div>
  );
};

export default App;
