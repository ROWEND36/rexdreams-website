import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Header from "./Header";

function Home(props) {
  return (
    <div>
      <Header />
      <div className="App">
        <header className="App-header">
          <Container>
            <Card className="shadow bg-secondary my-4">
              <CardContent>
                <Box my={4} mx={4} style={{ height: "65vh" }}></Box>
              </CardContent>
            </Card>
            <Card className="shadow bg-secondary my-4">
              <CardContent>
                <div className="d-flex flex-horizontal justify-content-between">
                  <div>
                    <Box my={4} mx={4} style={{ height: "150px" }}></Box>
                  </div>
                  <div>
                    <Box my={4} mx={4} style={{ height: "65vh" }}></Box>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow bg-secondary my-4">
              <CardContent>
                <Box my={4} mx={4} style={{ height: "65vh" }}></Box>
              </CardContent>
            </Card>
            <Card className="shadow bg-secondary my-4">
              <CardContent>
                <div className="d-flex flex-horizontal justify-content-between">
                  <div>
                    <Box my={4} mx={4} style={{ height: "35vh" }}></Box>
                  </div>
                  <div>
                    <Box my={4} mx={4} style={{ height: "60vh" }}></Box>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow bg-secondary my-4">
              <CardContent>
                <Box my={4} mx={4} style={{ height: "60vh" }}></Box>
              </CardContent>
            </Card>
            <Card className="shadow bg-secondary my-4">
              <CardContent>
                <div className="d-flex flex-horizontal justify-content-between">
                  <div>
                    <Box my={4} mx={4} style={{ height: "65vh" }}></Box>
                  </div>
                  <div>
                    <Box my={4} mx={4} style={{ height: "40vh" }}></Box>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Container>
        </header>
      </div>
    </div>
  );
}

export default Home;
