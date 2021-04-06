import "./App.css";
import "fontsource-roboto";
import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import "./App.css";
import History from "./Components/History";
import { Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routers from "./Components/Routers";
import Store from "./Components/Redux/Store";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" style={{ background: "black" }} />
      <Box my={0}>
        <Provider store={Store}>
          <Router history={History}>
            <Routers />
          </Router>
        </Provider>
      </Box>
      <ScrollTop {...props}>
        <Fab
          color="secondary"
          size="small"
          aria-label="scroll back to top"
          style={{ marginBottom: "120px" }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
