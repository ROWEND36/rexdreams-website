import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Modal from "@material-ui/core/Modal";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ChatIcon from "@material-ui/icons/Chat";
import InfoIcon from "@material-ui/icons/Info";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import SignupCard from "./SignupCard";
import logo from "../../Images/logo.png";
import { Box, ButtonBase, useScrollTrigger } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    // display: "none",
  },
  bg: {
    background: theme.palette.background.default,
  },
  menu: {
    "& .MuiMenuItem-root": {
      paddingLeft: theme.spacing(0),
      minWidth: "200px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItemBottomRow: {
    display: "flex",
    flexDirection: "row",
    alignContent: "end",
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0),
    paddingRight: theme.spacing(1),
    justifyContent: "space-between",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.searchBar.default,
    "&:hover": {
      backgroundColor: theme.palette.searchBar.hover,
    },
    marginRight: theme.spacing(3),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const MobileMenu = ({ anchorEl, onProfileMenuClick, onClose, id }) => {
  const classes = useStyles();
  const isMobileMenuOpen = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={id}
      keepMounted
      className={classes.menu}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={onClose}
    >
      {
        <div>
          <MenuItem>
            <IconButton aria-label="Home" href="/Home">
              <HomeIcon />
            </IconButton>
            Home
          </MenuItem>
          <MenuItem>
            <IconButton
              aria-label="Chats with us and share images"
              href="/Chat"
            >
              <Badge badgeContent={4} color="secondary">
                <ChatIcon />
              </Badge>
            </IconButton>
            Chat
          </MenuItem>
          <MenuItem>
            <IconButton aria-label="About" href="/About">
              <InfoIcon />
            </IconButton>
            About
          </MenuItem>
          <MenuItem divider>
            <IconButton aria-label="Invest" href="/Invest">
              <RssFeedIcon />
            </IconButton>
            Invest
          </MenuItem>
          <div className={classes.menuItemBottomRow}>
            <IconButton aria-label="show 4 new mails">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 11 new notifications">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              onClick={onProfileMenuClick}
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </div>
      }
    </Menu>
  );
};
const Header = function ({ window }) {
  const classes = useStyles();
  const [signupAnchorEl, setSignupMenuAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [focused, setFocused] = useState(false);
  const setBlurred = () => {
    setFocused(false);
  };
  const handleSignupMenuOpen = (event) => {
    if (mobileMoreAnchorEl) {
      setSignupMenuAnchorEl(mobileMoreAnchorEl);
      setMobileMoreAnchorEl(null);
    } else setSignupMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleSignupMenuClose = () => {
    setSignupMenuAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const signupMenuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  const showSearch = () => {
    return (
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        onFocus={setFocused}
        onBlur={setBlurred}
        inputProps={{ "aria-label": "search" }}
      />
    );
  };
  const [modal, setModal] = useState(false);
  const scrolleddown = useScrollTrigger({
    disableHysteresis: true,
    target: window ? window() : undefined,
  });
  return (
    <div>
      <AppBar
        className={classes.bg}
        color="inherit"
        elevation={scrolleddown ? 4 : 0}
        position="fixed"
      >
        <Toolbar>
          <ButtonBase
            href="/Home"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img alt="logo" src={logo} height="50px" width="50px" />
          </ButtonBase>
          <div elevation={focused ? 4 : 0} className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon
                onClick={() => {
                  setModal(true);
                }}
              />
            </div>
            {showSearch()}
            <Modal isVisible={modal}>{showSearch()}</Modal>
          </div>

          {/* <div className="d-none d-md-inline-block"> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div
              className="d-flex"
              style={{ float: "right", marginLeft: "20px" }}
            >
              <IconButton
                href="/Home"
                activeStyle={{ color: "purple" }}
                aria-label="Home"
                color="inherit"
                className="ml-4 mr-2"
              >
                <HomeIcon />
              </IconButton>
              <IconButton
                href="/Chat"
                activeStyle={{ color: "purple" }}
                aria-label="Chats with us and share images"
                color="inherit"
                className="mx-2"
              >
                <Badge badgeContent={4} color="secondary">
                  <ChatIcon />
                </Badge>
              </IconButton>
              <IconButton
                href="/About"
                fontSize="large"
                aria-label="About us"
                color="inherit"
                className="mx-2"
              >
                <InfoIcon />
              </IconButton>
              <IconButton
                href="/News Feed"
                fontSize="large"
                aria-label="Chats with us and share images"
                color="inherit"
                style={{ marginRight: "150px" }}
                className="ml-2"
              >
                <RssFeedIcon />
              </IconButton>
            </div>

            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={signupMenuId}
              aria-haspopup="true"
              onClick={handleSignupMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MobileMenu
        anchorEl={mobileMoreAnchorEl}
        id={mobileMenuId}
        onClose={handleMobileMenuClose}
        onProfileMenuClick={handleSignupMenuOpen}
      />
      <SignupCard
        anchorEl={signupAnchorEl}
        id={signupMenuId}
        onClose={handleSignupMenuClose}
      />
    </div>
  );
};
export default Header;
