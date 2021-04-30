import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import icon from "../Images/logo.png";
import {TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    "& .MuiInputBase-root": {
      margin: theme.spacing(1)
    }
  },
  iconCard: {
    borderRadius: "50%",
    borderWidth: 2,
    borderColor: theme.palette.grey[200],
    borderStyle: "solid",
    overflow: "hidden",
    width: 75,
    height: 75,
    display: "inline-block",
    [theme.breakpoints.up("sm")]:{
      flexAlign:"center"
    }
  },
  iconCardImg: {
    width: "100%",
    height: "100%",
  },
}));

function IconCard({ imageSrc = icon }) {
  const classes = useStyles();
  return (
    <div className={classes.iconCard}><img src={imageSrc} className={classes.iconCardImg}></img>
    </div>
  );
}

function Chat(props) {
  const classes = useStyles();
  return (
    <Container>
      <Box my={4} mx={4}>
        <IconCard />
      </Box>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField label="Email" variant="outlined"/>
      <TextField label="Password" variant="outlined"/>
      </form>
    </Container>
  );
}

export default Chat;
