import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent"
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import Typography from "@material-ui/core/Typography";
import Dreams from "../Images/Dreams.png";
import Button from '@material-ui/core/Button';

const theme = createMuiTheme( {
 
 

});

 const useStyles = makeStyles((about) => ({
   hero: {
     backgroundImage:  `url("Dreams.png")`,
     height: "500px",
     backgroundPosition: "center",
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     position: "relative",
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     color: "#778899",
     fontSize: "6rem",
   },

   body: {
     paddingTop: theme.spacing(3)
     
   },

   title: {
     fontWeight: 900,
     paddingBottom: theme.spacing(3)
   },

   card: {
     maxWidth: "100%",

   },

   media: {
     height: 50
   },
 
root: {
    '& > *': {
      margin: theme.spacing(1),
    }
}

 }));

function About() {
    useEffect(() => {
        Aos.init({ duration: 3000 });

    }, []);

   const classes = useStyles();
   const theme = createMuiTheme();


  return (
       <div className="App">
       
    


         <Box className={classes.hero}>
       
           <Box>About Us</Box>
        </Box>

<Container maxWidth="lg" className={classes.body} >
       <Typography variant="h4" className={classes.title} data-aos="fade-right" align="center" >
          Who We Are
       </Typography>

      <Card data-aos= "fade-down" className="shadow bg-secondary" >
       <CardActionArea>
        <CardMedia
          sx={{ height: 140 }}
          image ="https://unsplash.com/photos/M1WH70wCndU"
          title="ios"
        />
      <CardContent>
      <Typography
          variant="h5"
                           >
        We at REXDREAMS are passionate about building cost effective and user-friendly
        native WebApps and Mobile Apps for Andriod and IOS devices
        We deliver beautiful and high quality designs, strive to deliver the best at the most affordable
        prices.
      </Typography>
      </CardContent>
      </CardActionArea>
      </Card>

        <Typography variant="h4" className={classes.title} data-aos="fade-right" paddingTop="10" >
          What We Do
       </Typography>


 <Grid container spacing={3} >
         <Grid item xs={12} sm={6} md ={4} >
           <Card data-aos= "fade-up" sx={{ maxWidth: 345 }} className="shadow bg-secondary" >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image="https://unsplash.com/photos/iFSvn82XfGo"
          title="WebApp"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WebApp
          </Typography>
          <Typography variant="body2" color="text.secondary">
        We at REXDREAMS are passionate about building cost effective and user-friendly
        native WebApps.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Grid>

 <Grid item xs={12} sm={6} md ={4} >
           <Card data-aos= "flip-left" sx={{ maxWidth: 345 }} className="shadow bg-secondary">
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          image="https://unsplash.com/photos/HfWA-Axq6Ek"
          title="Android"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Android
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We at REXDREAMS are passionate about building cost effective and user-friendly
            Android apps.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</Grid>


<Grid item xs={12} sm={6} md ={4} >
      <Card data-aos= "fade-down" sx={{ maxWidth: 345 }} className="shadow bg-secondary" >
      <CardActionArea>
        <CardMedia
          component="img"
          alt="ios"
          sx={{ height: 140 }}
          image ="../Images/Dreams.png"
          title="ios"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ios
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We at REXDREAMS are passionate about building cost effective and user-friendly
            native ios apps
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
</Grid>
      
</Container>
   <Button  variant="contained" color="primary">
        Contact Us
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
</div>
    );
}

export default About;
