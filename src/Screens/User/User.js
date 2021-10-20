import { Box, Paper, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { Redirect } from "react-router";
import { useUser } from "../../Components/Firebase/Firebase";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import App from "../App/App";
const requestTypes = {
  title: "How can Rexdreams help you?",
  options: [
    {
      name: "I want to create a website",
      title: "Which of these best describes the kind of website you want?",
      options: [
        {
          name: "An E-commerce website(Online market)",
        },
        {
          name: "A school website",
        },
        {
          name: "A company website",
        },
        {
          name: "A blog",
        },
        {
          name: "I have something else in mind",
        },
      ],
    },
    {
      name: "I want to create a mobile application",
      title: "",
    },
  ],
};
const useStyles = makeStyles((theme) => {
  return {
    optionRoot: {
      width: "450px",
      maxWidth: "90vw",
      flexGrow: 0,
      margin: theme.spacing(2, 2),
      "& .MuiCardActionArea-root": {
        padding: theme.spacing(2),
        height: "100%",
      },
    },
    optionHeader: {
      margin: theme.spacing(2, 0, 2),
    },
    userPageRoot: {
      background: theme.palette.background.contrast,
    },
  };
});
const UserRoot = () => {
  const user = useUser();
  return !user ? (
    <Redirect to="/Home" />
  ) : (
    <App>
      <UserPage user={user} />
    </App>
  );
};
export const UserPage = ({ user }) => {
  const [nav, setNav] = useState([requestTypes]);
  const question = nav[nav.length - 1];
  console.log(nav);
  const classes = useStyles();
  const advance = function (i) {
    return function () {
      setNav([...nav, question.options[i]]);
    };
  };
  const goBack = function () {
    setNav(nav.slice(0, -1));
  };
  return (
    <Box p={4} className={classes.userPageRoot}>
      <Box mb={2}>
        <Typography variant="h5">{`Welcome ${
          user.displayName || user.email
        },`}</Typography>
      </Box>

      {nav.length > 1 ? <Button onClick={goBack}>Previous</Button> : undefined}
      {question.options ? (
        <>
          <Typography className={classes.optionHeader} variant="h4">
            {question.title}
          </Typography>
          <Box
            display="flex"
            flexWrap={"wrap"}
            justifyContent="center"
            align="center"
          >
            {question.options.map((e, i) => {
              return (
                <Card className={classes.optionRoot}>
                  <CardActionArea onClick={advance(i)}>
                    <Typography>{e.name}</Typography>
                  </CardActionArea>
                </Card>
              );
            })}
          </Box>
        </>
      ) : (
        <>
          <Typography paragraph>
            Thank you for your detailed description. Here's what we have so far?
            You can go back and alter any details both now and later.
            <ul>
              {nav.slice(1).map((e) => (
                <li>{e.name}</li>
              ))}
            </ul>
          </Typography>
          <Typography paragraph>
            You can add any other specific information below.
          </Typography>
          <TextField
            multiline
            fullWidth
            rows={3}
            rowsMax={9}
            variant="filled"
          ></TextField>
          <Button
            variant="contained"
            color="primary"
            style={{ display: "block", margin: "16px auto" }}
          >
            Submit
          </Button>
        </>
      )}
    </Box>
  );
};
export default UserRoot;
