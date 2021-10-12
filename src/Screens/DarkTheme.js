import { createMuiTheme } from "@material-ui/core";
import { blue, pink } from "@material-ui/core/colors";

export const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
    background: {
      default: "black",
    },
  },
});
export const themeLight = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
    background: {},
  },
});
export default themeLight;
