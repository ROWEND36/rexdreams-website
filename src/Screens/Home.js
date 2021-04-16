import React from "react";
import Container from "@material-ui/core/Container";

import SettingsIcon from "@material-ui/icons/Settings";

function Home(props) {
  return (
    <div>
      <Container>
        <SettingsIcon
          width="100px"
          height="100px"
          size={"large"}
          className="rounded App-logo mb-5"
        />
        <h4>Overall re-design awaiting a new app launch in progress...</h4>
        <h1>Available shortly</h1>
      </Container>
    </div>
  );
}

export default Home;
