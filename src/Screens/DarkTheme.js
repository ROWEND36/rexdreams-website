import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#121212",
    },
    background: {
      default: "#050505",
      paper: "#121212",
    },
  },
});
export default theme;
