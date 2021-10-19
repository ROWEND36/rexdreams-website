import { useEffect, useState } from "react";
import { useUser, logOut, signUpGoogle } from "../../Components/Firebase";
import Container from "@material-ui/core/Container";
import {
  Button,
  ButtonBase,
  makeStyles,
  Popover,
  Typography,
} from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import icon from "../../Images/logo.png";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import useBreakpoint from "../../Components/useBreakpoint";
import { signUpEmail, logInEmail } from "../../Components/Firebase";
import { useHistory } from "react-router";
const trackChange = function (setValue) {
  console.error(setValue);
  return (ev) => {
    setValue(ev.target.value || "");
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
  spacedBtn: {
    margin: theme.spacing(0, 2),
  },
  continueBtn: {
    margin: theme.spacing(2, "auto"),
    display: "block",
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
    padding: theme.spacing(1, 4, 2),
    maxWidth: "80vw",
    [theme.breakpoints.up("xs")]: {
      maxWidth: "600px",
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
  const user = useUser();
  const isSmallScreen = useBreakpoint();
  const [errorText, setErrorText] = useState("");
  const [email, setEmail] = useState();
  const history = useHistory();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [signingIn, setSigningIn] = useState();
  const toggleSigningIn = () => {
    setSigningIn(!signingIn);
  };
  useEffect(() => {
    setErrorText("");
  }, [signingIn]);

  const signOut = () => {
    logOut().then(() => {
      history.push("/Home");
    });
  };
  const proceedGoogle = () => {
    signUpGoogle({ useRedirect: isSmallScreen });
  };
  const proceed = () => {
    if (user) {
      history.push("/User");
      return;
    }
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
    ? { vertical: "center", horizontal: "center" }
    : { vertical: "top", horizontal: "right" };

  return (
    <Popover
      anchorEl={isSmallScreen ? null : anchorEl}
      anchorOrigin={position}
      id={id}
      keepMounted
      transformOrigin={position}
      open={isMenuOpen}
      onClose={onClose}
    >
      <div className={classes.modal}>
        <IconCard />
        <Typography className={classes.sectionEnd} variant="h5">
          &#8288;Let's get started&#8288;
        </Typography>
        <Typography color="error">{errorText}</Typography>
        {user ? (
          <Typography className={classes.sectionEnd}>
            {`Currently signed in as ${user.displayName || user.email}`}
          </Typography>
        ) : (
          <form noValidate>
            <TextField
              onChange={trackChange(setEmail)}
              label="Email"
              type="email"
              name="email"
              variant="outlined"
              style={{
                display: signingIn ? "" : "block",
              }}
            />
            <TextField
              onChange={trackChange(setPassword)}
              label="Password"
              type="passsword"
              name="password"
              variant="outlined"
            />
            {signingIn ? undefined : (
              <TextField
                onChange={trackChange(setPassword2)}
                label="Confirm Password"
                type="confirmpassword"
                name="confirmpassword"
                variant="outlined"
              />
            )}
            <Button
              className={classes.continueBtn}
              variant="contained"
              color="primary"
              onClick={proceed}
            >
              Continue
            </Button>
            <Button
              className={classes.continueBtn}
              variant="contained"
              color="primary"
              onClick={proceedGoogle}
            >
              Continue with Google
            </Button>
          </form>
        )}
        {user ? (
          <div>
            <Button
              className={classes.spacedBtn}
              variant="contained"
              color="primary"
              disabled={false /*//TODO*/}
              onClick={proceed}
            >
              Continue
            </Button>
            <Button
              className={classes.spacedBtn}
              onClick={signOut}
              variant="outlined"
              color="secondary"
            >
              Sign out
            </Button>
          </div>
        ) : (
          <div>
            {signingIn
              ? "Don't have an account? "
              : "Already have an account? "}
            <ButtonBase className={classes.textLink} onClick={toggleSigningIn}>
              {signingIn ? "Create an account" : "Log in"}
            </ButtonBase>
          </div>
        )}
      </div>
    </Popover>
  );
}

export default SignupForm;
