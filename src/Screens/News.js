import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
function News(props) {
  return (
    <Container>
      <Card className="shadow bg-secondary my-4">
        <CardContent>
          <Box my={4} mx={4}></Box>
        </CardContent>
      </Card>
      <Card className="shadow bg-secondary my-4">
        <CardContent>
          <div className="d-flex flex-horizontal justify-content-between">
            <div>
              <Box my={4} mx={4}></Box>
            </div>
            <div>
              <Box my={4} mx={4}></Box>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}

export default News;
