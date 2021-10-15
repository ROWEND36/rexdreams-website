import { createMuiTheme, fade } from "@material-ui/core/styles";
import { blue, pink, grey } from "@material-ui/core/colors";

export const themeDark = createMuiTheme({
  palette: {
    type: "dark",
    searchBar: {
      hover: "#1B2D51",
      default: "#131523",
    },
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink[500],
    },
    grey: {
      main: "#757687",
    },

    augment1: "#B5C8FF",
    augment2: "#061f47",
    background: {
      default: "#01060F",
      contrast: "#000000",
      paper: "#11131F",
      constrastText: "#f5f7ff",
    },
  },
});
export const themeLight = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: blue[500],
    },
    searchBar: {
      default: "#ffffff",
    },
    grey: {
      main: "#757687",
    },
    secondary: {
      main: pink[500],
    },
    augment1: "#5472d3",
    background: {},
  },
});
export default themeDark;
