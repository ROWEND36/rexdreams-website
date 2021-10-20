import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import App from "../Screens/App/App";
import Typography from "@material-ui/core/Typography";
import Dreams from "../Images/Dreams.png";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({});

const useStyles = makeStyles((about) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("Dreams.png")`,
    height: "500px",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#778899",
    fontSize: "6rem",
    fontFamily: "Verdana",
    fontWeight: 500,
  },

  body: {
    paddingTop: theme.spacing(3),
  },

  title: {
    fontWeight: 600,
    paddingBottom: theme.spacing(3),
    fontStyle: "oblique",
    fontFamily: "Arial",
    color: "#778899",
    paddingTop: theme.spacing(3),
  },

  card: {
    maxWidth: "100%",
  },

  media: {
    height: 50,
  },

  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function About() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const classes = useStyles();
  const theme = createMuiTheme();

  return (
    <App>
      <div className="App">
        <Box className={classes.hero}>
          <Box>About Us</Box>
        </Box>

        <Container maxWidth="lg" className={classes.body}>
          <Typography
            variant="h4"
            className={classes.title}
            data-aos="zoom-in"
            align="center"
          >
            Who We Are
          </Typography>

          <Card data-aos="zoom-out-up" className="shadow bg-secondary">
            <CardActionArea>
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image="Rdr.png"
                title="REXDREAMS"
              />
            </CardActionArea>
          </Card>

          <Typography
            variant="h4"
            className={classes.title}
            data-aos="zoom-in-up"
            paddingTop="10"
          >
            What We Do
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                data-aos="zoom-in-up"
                sx={{ maxWidth: 345 }}
                className="shadow bg-secondary"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ height: 140 }}
                    image="Web.jpg"
                    title="WebApp"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      WebApp
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We at REXDREAMS are passionate about building cost
                      effective and user-friendly native WebApps.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                data-aos="zoom-in-up"
                sx={{ maxWidth: 345 }}
                className="shadow bg-secondary"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ height: 140 }}
                    image="Android.jpg"
                    title="Android"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Android
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We at REXDREAMS are passionate about building cost
                      effective and user-friendly Android apps.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                data-aos="fade-down-left"
                sx={{ maxWidth: 345 }}
                className="shadow bg-secondary"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="ios"
                    sx={{ height: 140 }}
                    image="Ios.jpg"
                    title="ios"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      ios
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We at REXDREAMS are passionate about building cost
                      effective and user-friendly native ios apps
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Typography
            variant="h4"
            className={classes.title}
            data-aos="zoom-in"
            align="center"
          >
            What we offer
          </Typography>
          <Grid>
            <Card data-aos="zoom-out-up" className="shadow bg-secondary">
              <CardActionArea>
                <CardMedia
                  component="img"
                  sx={{ height: 140 }}
                  image="offer.png"
                  title="What We Offer"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Container>

        <Button
          variant="contained"
          color="primary"
          data-aos="zoom-in"
          type=""
          onClick={() => {
            alert("contact us");
          }}
        >
          Contact Us
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
      </div>
    </App>
  );
}

export default About;
