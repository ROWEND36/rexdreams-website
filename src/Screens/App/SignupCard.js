import React from "react";
import Container from "@material-ui/core/Container";
import { Button, ButtonBase, makeStyles, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import icon from "../../Images/logo.png";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";
import useBreakpoint from "../../Components/useBreakpoint";

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
      paddingRight: theme.spacing(8),
      paddingLeft: theme.spacing(8),
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
          Let's get started
        </Typography>
        <TextField label="Email" variant="outlined" />
        <TextField label="Password" variant="outlined" />
        <Button
          className={classes.sectionStart}
          variant="contained"
          color="primary"
        >
          Log In
        </Button>
        <div>
          Don't have an account?{" "}
          <ButtonBase className={classes.textLink}>Sign up</ButtonBase>
        </div>
      </form>
    </Menu>
  );
}

export default SignupForm;
