import { Parallax } from "../ParallaxLayer";
// import landingImage from "../../Images/landingImageDesktop.svg";
import multiDevicesImage from "../../Images/phone.png";
import useBreakpoint from "../../Components/useBreakpoint";
import { useRef } from "react";
import { makeStyles, Typography, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    introText: {
      width: "70vw",
      height: "100%",
      display: "flex",
      fontWeight: theme.typography.fontWeightBold,
      alignItems: "center",
      padding: theme.spacing(5),
      [theme.breakpoints.up("xs")]: {
        width: "50vw",
        maxWidth: "450px",
      },
    },
    landingImage: {
      width: "50vw",
      height: "auto",
      objectFit: "contain",
    },
    cube: {
      background: theme.palette.augment2,
      borderRadius: "10%",
      opacity: 0.5,
    },
  };
});
const Cube = ({ rotation = 0, size = 200, ...props }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.cube}
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotateZ(${rotation}deg)`,
        ...props,
      }}
    ></div>
  );
};

const Waves = () => {
  const theme = useTheme();
  return (
    <svg
      class="bottom-decoration"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill={theme.palette.background.contrast}
        fillOpacity="1"
        d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,186.7C672,160,768,96,864,112C960,128,1056,224,1152,245.3C1248,267,1344,213,1392,186.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};
export const IntroPage = function ({ className }) {
  const isMobile = useBreakpoint();
  const isTablet = useBreakpoint("sm");
  const classes = useStyles();
  return (
    <div className={`${className} parallax-container`}>
      <Parallax>
        <Cube rotation={45} left={isMobile ? 200 : 400} top={300} />
        <Cube rotation={15} left={-100} top={50} />
        <Cube rotation={35} size={400} left={900} top={100} />
      </Parallax>
      <div className="fullscreen-page">
        <Typography
          className={classes.introText}
          variant={isTablet ? "h3" : "h2"}
        >
          Create professional web and mobile applications
        </Typography>
        {isMobile ? (
          ""
        ) : (
          <img
            className={classes.landingImage}
            src={multiDevicesImage}
            alt="Rexdreams supports multiple platforms"
          />
        )}
      </div>
      <Waves />
    </div>
  );
};
