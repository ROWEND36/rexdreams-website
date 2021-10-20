import { useEffect, useState } from "react";
import {
  useUser,
  logOut,
  signUpGoogle,
} from "../../Components/Firebase/Firebase";
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
import useBreakpoint from "../../Helpers/useBreakpoint";
import { signUpEmail, logInEmail } from "../../Components/Firebase/Firebase";
import { useHistory } from "react-router";
const trackChange = function (setValue) {
  console.error(setValue);
  return (ev) => {
    setValue(ev.target.value || "");
  };
};
const GoogleIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
        <path
          fill="#4285F4"
          d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
        />
        <path
          fill="#34A853"
          d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
        />
        <path
          fill="#FBBC05"
          d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
        />
        <path
          fill="#EA4335"
          d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
        />
      </g>
    </svg>
  );
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
              fullWidth
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
              color="default"
              onClick={proceedGoogle}
            >
              <GoogleIcon />
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
