import "./App.scss";
import "@fontsource/roboto"; // Defaults to weight 400
import { useEffect, Fragment } from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "../DarkTheme";
import Store from "../../Components/Redux/Store";
import Header from "./Header";
import Footer from "./Footer";
import { UserDataProvider } from "../../Components/Firebase/UserData";
import { useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollToTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const scrolledDown = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollBackToTop = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={scrolledDown}>
      <div
        onClick={scrollBackToTop}
        role="presentation"
        className={classes.root}
      >
        {children}
      </div>
    </Zoom>
  );
}

ScrollToTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default function App({ children: rootView }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5f9066b1f91e4b431ec66b34/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  });
  return (
    <Fragment>
      <UserDataProvider>
        <ThemeProvider theme={Object.assign({}, darkTheme)}>
          <CssBaseline />
          <Provider store={Store}>
            <Header />
            <Toolbar id="back-to-top-anchor" />
          </Provider>
          {rootView}
          <Footer />
          <ScrollToTop>
            <Fab
              color="secondary"
              size="small"
              aria-label="scroll back to top"
              style={{ marginBottom: "120px" }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollToTop>
        </ThemeProvider>
      </UserDataProvider>
    </Fragment>
  );
}
