import React from "react";
import Container from "@material-ui/core/Container";

import logo from "../Images/logo.png";

function Home(props) {
  return (
    <div>
      <Container>
        <img
          src={logo}
          alt="logo"
          width="100px"
          height="0px"
          className="rounded App-logo mb-5"
        />
        <h4>Overall re-design awaiting a new app launch in progress...</h4>
        <h1>Available shortly</h1>
      </Container>
    </div>
  );
}

export default Home;
