import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar"

function About(props) {
  return (
    <>

      <Card className="shadow bg-secondary my-4">
      <CardHeader title= "WHO WE ARE" />
        <CardContent >
          <Box my={5} mx={85}></Box>
        </CardContent>
      </Card>
      
      <Card className="shadow bg-secondary my-4">
      <CardHeader title= "OUR VALUES" />
        <CardContent>
          <Box my={5} mx={85}></Box>
            
        </CardContent>
      </Card>

       <Card className="shadow bg-secondary my-4">
       <CardHeader title= "MEET THE TEAM" />
        <CardContent>
          <Box my={15} mx={85}></Box>
        </CardContent>
      </Card>
</>
  );
}1 

export default About;
