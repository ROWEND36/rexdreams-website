import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
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
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";
import logo from "../Images/logo.png";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    background: "#000000",
    // display: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
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
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
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

function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <div style={{ backgroundColor: "black" }}>
        <MenuItem>
          <IconButton aria-label="Home" color="secondary" href="/Home">
            <HomeIcon />
          </IconButton>
          <p style={{ color: "white", margin: "0px 10px" }}>Home</p>
        </MenuItem>
        <MenuItem>
          <IconButton
            aria-label="Chats with us and share images"
            color="secondary"
            href="/Chat"
          >
            <Badge badgeContent={4} color="secondary">
              <ChatIcon />
            </Badge>
          </IconButton>
          <p style={{ color: "white", margin: "0px 10px" }}>Chat</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="Pricing" color="secondary" href="/Price">
            <MonetizationOnIcon />
          </IconButton>
          <p style={{ color: "white", margin: "0px 10px" }}>Pricing</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="Invest" color="secondary" href="/Invest">
            <AccountBalanceIcon />
          </IconButton>
          <p style={{ color: "white", margin: "0px 10px" }}>Invest</p>
        </MenuItem>
        <div className="d-flex flex-horizontal justify-content-between">
          <MenuItem>
            <IconButton aria-label="show 4 new mails" color="secondary">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              aria-label="show 11 new notifications"
              color="secondary"
            >
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="secondary"
            >
              <AccountCircle />
            </IconButton>
          </MenuItem>
        </div>
      </div>
    </Menu>
  );
  const showSearch = () => {
    return (
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    );
  };
  const [modal, setModal] = useState(false);

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          style={{
            background: "black",
          }}
        >
          <IconButton
            href="/Home"
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img alt="logo" src={logo} height="50px" width="50px" />
          </IconButton>
          <div className={classes.search}>
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
                size="large"
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
                href="/Pricing"
                aria-label="Pricing"
                color="inherit"
                className="mx-2"
              >
                <MonetizationOnIcon />
              </IconButton>
              <IconButton
                href="/Invest"
                aria-label="Chats with us and share images"
                color="inherit"
                style={{ marginRight: "150px" }}
                className="ml-2"
              >
                <AccountBalanceIcon />
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
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
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
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
export default Header;
