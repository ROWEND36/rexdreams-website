import React, {useEffect} from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import "@fontsource/roboto";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar"
import { makeStyles } from "@material-ui/core/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Boxes.css";
import Typography from "@material-ui/core/Typography";




function About(props) {
  useEffect(() => {
    Aos.init({duration: 3000});

  }, []); 
  const useStyles= makeStyles((theme) => ({
    root: {
    display : "flex",
    "& > *" : {
      margin: theme.spacing(1)
    },
     },

 large: {
       width: theme.spacing(7),
       height: theme.spacing(7)
     },
      avatar: {
       marginLeft: theme.spacing(2)
     }

  }))


  return (
     
    <>

      <Card data-aos= "fade-down" className="shadow bg-secondary my-4">
       
        <CardHeader  title= "WHO WE ARE" />

        <CardContent >
        <Typography 
          variant="body1"
          align="left"
          color="textSecondary"
          display="block"

        >
         REXDREAMS is a software comapany committed to
         developing cost effective and user friendly
         WebApplications and mobile apllications for Andriod and IOS devices.  
        </Typography>
        
          <Box my={6} mx={6}></Box>
        </CardContent>
      </Card>
      
      <Card data-aos= "fade-right" className="shadow bg-secondary my-4">
      <CardHeader title= "OUR VALUES" />
        <CardContent>
          <Box my={5} mx={85}></Box>
            
        </CardContent>
      </Card>

       <Card data-aos= "fade-left" className="shadow bg-secondary my-4">
       <CardHeader title= "MEET THE TEAM" />
        <CardContent>
        <Box my={15} mx={85}></Box>
        <Avatar src="KingIcon.png"  />
        
        </CardContent>
      </Card>
</>
  );
}

export default About;
