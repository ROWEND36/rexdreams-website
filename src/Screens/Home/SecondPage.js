import { motion, useCycle, useMotionValue, useTransform } from "framer-motion";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";
import Spin from "react-reveal/Spin";
import Wobble from "react-reveal/Wobble";
import config from "react-reveal/globals";
import KingIcon from "../../Images/KingIcon.png";
import SettingsIcon from "@material-ui/icons/Settings";
import AssistantPhotoIcon from "@material-ui/icons/AssistantPhoto";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import settings from "./SlickSettings.json";
import { useRef, useState, useCallback, useEffect } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import Slider from "react-slick";
import "./Home.scss";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import SecurityIcon from "@material-ui/icons/SecurityOutlined";
import LocalFloristIcon from "@material-ui/icons/LocalFloristOutlined";
import SvgIcon from "@material-ui/core/SvgIcon";

import "slick-carousel/slick/slick.scss";
import { blue } from "@material-ui/core/colors";
import useBreakpoint from "../../Components/useBreakpoint";
import { Link } from "react-router-dom";
const SavingsIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <rect fill="none" height="24" width="24" />
      <g>
        <path d="M15,10c0-0.55,0.45-1,1-1s1,0.45,1,1c0,0.55-0.45,1-1,1S15,10.55,15,10z M8,9h5V7H8V9z M22,7.5v6.97l-2.82,0.94L17.5,21 L12,21v-2h-2v2l-5.5,0C4.5,21,2,12.54,2,9.5S4.46,4,7.5,4l5,0c0.91-1.21,2.36-2,4-2C17.33,2,18,2.67,18,3.5 c0,0.21-0.04,0.4-0.12,0.58c-0.14,0.34-0.26,0.73-0.32,1.15l2.27,2.27H22z M20,9.5h-1L15.5,6c0-0.65,0.09-1.29,0.26-1.91 C14.79,4.34,14,5.06,13.67,6L7.5,6C5.57,6,4,7.57,4,9.5c0,1.88,1.22,6.65,2.01,9.5L8,19v-2h6v2l2.01,0l1.55-5.15L20,13.03V9.5z" />
      </g>
    </SvgIcon>
  );
};

const BoltIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z" />
    </SvgIcon>
  );
};
const useStyles = makeStyles((theme) => ({
  sliderRoot: {
    padding: `${theme.spacing(4, 4, 8)}`,
    background: theme.palette.background.contrast,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      "& .slick-slider": {
        width: "100%",
      },
    },
  },
  circle: {
    borderRadius: 25,
    background: "black",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    "& .MuiCard-root": {
      margin: theme.spacing(2),
    },
  },
  pointCard: {
    // width: "400px",
    maxHeight: "80vh",
    maxWidth: "70vw",
    display: "flex",
    margin: "auto",
    padding: theme.spacing(2),
    alignItems: "center",
    flexDirection: "column",
    backgroundPosition: "center",
    backgroundSize: "auto 50%",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
    position: "relative",
  },
}));

const PointCard = ({
  Icon,
  header,
  text,
  iconBackground = blue[900],
  iconForeground = blue[100],
  ...props
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.pointCard} elevation={4}>
      <div
        className={classes.circle}
        style={{
          background: iconBackground,
        }}
      >
        <Icon style={{ color: iconForeground }} />
      </div>
      <Typography gutterBottom variant="h6" align="center">
        {header}
      </Typography>
      <Typography paragraph>{text}</Typography>
    </Card>
  );
};
const GridOrSlider = ({ className, children }) => {
  const isMobile = useBreakpoint("sm");
  const sliderRef = useRef();
  const classes = useStyles();

  const gotoNextSlide = useCallback(() => {
    const slider = sliderRef.current;
    slider.slickNext();
  }, [sliderRef]);

  return isMobile ? (
    <Slider ref={sliderRef} {...settings}>
      {children}
    </Slider>
  ) : (
    <div class={classes.grid}>{children}</div>
  );
};
export default function Landing({ id, className }) {
  const classes = useStyles();

  return (
    <div id={id} className={`${className} ${classes.sliderRoot}`}>
      <GridOrSlider>
        <PointCard
          Icon={SecurityIcon}
          header="Top-grade Security"
          text="At Rexdreams, we consider security to be a requirement for all our software."
        />
        <PointCard
          Icon={BoltIcon}
          header="Superb performance"
          text="At Rexdreams, we consider security to be a requirement for all our software."
        />
        <PointCard
          Icon={SavingsIcon}
          header="Top-grade security"
          text="At Rexdreams, we consider security to be a requirement for all our software."
        />
        <PointCard
          Icon={LocalFloristIcon}
          header="Top-grade security"
          text="At Rexdreams, we consider security to be a requirement for all our software."
        />
      </GridOrSlider>
    </div>
  );
}
