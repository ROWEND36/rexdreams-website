import React from "react";
import Container from "@material-ui/core/Container";
import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import icon from "../../Images/logo.png";
import TextField from "@material-ui/core/TextField";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  iconCard: {
    borderRadius: "50%",
    overflow: "hidden",
    width: 75,
    height: 75,
    display: "inline-block",
    [theme.breakpoints.up("sm")]: {
      flexAlign: "center",
    },
  },
  iconCardImg: {
    width: "100%",
    height: "100%",
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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
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
      style={{ maxWidth: "300px" }}
    >
      <Grid container justify="center" alignItems="center">
        <Grid item xs={2}>
          <IconCard />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4">Let's get started</Typography>
        </Grid>
        <Grid item xs={6}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container justify="center" alignItems="center">
              <Grid item xs={8} md={4}>
                <TextField label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={8} md={4}>
                <TextField label="Password" variant="outlined" />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Menu>
  );
}

export default SignupForm;
