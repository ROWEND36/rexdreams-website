import { useState } from "react";
import Container from "@material-ui/core/Container";
import { Button, ButtonBase, makeStyles, Typography } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import icon from "../../Images/logo.png";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import useBreakpoint from "../../Components/useBreakpoint";
import { signUpEmail, logInEmail } from "../../Components/User";
import { useHistory } from "react-router";
const trackChange = function (setValue) {
  console.error(setValue);
  return (ev) => {
    setValue(ev.target.value);
  };
};
const useStyles = makeStyles((theme) => ({
  iconCard: {
    borderRadius: "50%",
    overflow: "hidden",
    width: 75,
    height: 75,
    display: "inline-block",
    marginTop: 0,
    margin: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      flexAlign: "center",
    },
  },
  sectionEnd: {
    marginBottom: theme.spacing(2),
  },
  sectionStart: {
    marginTop: theme.spacing(2),
  },
  iconCardImg: {
    width: "100%",
    height: "100%",
  },
  textLink: {
    color: theme.palette.primary.main,
  },
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(4),
      paddingLeft: theme.spacing(4),
      paddingBottom: theme.spacing(2),
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
    },
  },
}));

function IconCard({ imageSrc = icon }) {
  const classes = useStyles();
  return (
    <div className={classes.iconCard}>
      <img
        alt="company icon"
        src={imageSrc}
        className={classes.iconCardImg}
      ></img>
    </div>
  );
}

function SignupForm({ anchorEl, id, onClose }) {
  const classes = useStyles();
  const isMenuOpen = Boolean(anchorEl);
  const isSmallScreen = useBreakpoint();
  const [errorText, setErrorText] = useState();
  const [email, setEmail] = useState();
  const history = useHistory();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [signingIn, setSigningIn] = useState();
  const toggleSigningIn = () => {
    setSigningIn(!signingIn);
  };
  const proceed = () => {
    if (!signingIn && password !== password2) {
      return setErrorText("Passwords do not match");
    }
    (signingIn ? logInEmail : signUpEmail)({ email, password })
      .then(() => {
        history.push("/User");
      })
      .catch((e) => {
        setErrorText(e.message);
      });
  };

  const position = isSmallScreen
    ? { vetical: "center", horizontal: "center" }
    : { vertical: "top", horizontal: "right" };

  return (
    <Menu
      anchorEl={isSmallScreen ? null : anchorEl}
      anchorOrigin={position}
      id={id}
      keepMounted
      transformOrigin={position}
      open={isMenuOpen}
      onClose={onClose}
    >
      <form className={classes.modal} noValidate autoComplete="off">
        <IconCard />
        <Typography className={classes.sectionEnd} variant="h5">
          &#8288;Let's get started&#8288;
        </Typography>
        <TextField
          onChange={trackChange(setEmail)}
          label="Email"
          variant="outlined"
        />
        <TextField
          onChange={trackChange(setPassword)}
          label="Password"
          variant="outlined"
        />
        {signingIn ? undefined : (
          <TextField
            onChange={trackChange(setPassword2)}
            label="Confirm Password"
            variant="outlined"
          />
        )}
        <Button
          className={`${classes.sectionStart} ${classes.sectionEnd}`}
          variant="contained"
          color="primary"
          onClick={proceed}
        >
          Continue
        </Button>
        <div>
          {signingIn ? "Don't have an account? " : "Already have an account? "}
          <ButtonBase className={classes.textLink} onClick={toggleSigningIn}>
            {signingIn ? "Create an account" : "Log in"}
          </ButtonBase>
        </div>
      </form>
    </Menu>
  );
}

export default SignupForm;
