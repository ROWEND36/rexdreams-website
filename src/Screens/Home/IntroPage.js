import { Parallax } from "../ParallaxLayer";
// import landingImage from "../../Images/landingImageDesktop.svg";
// import landingImageMobile from "../../Images/landingImageMobile.svg";
import useBreakpoint from "../../Components/useBreakpoint";
import { useRef } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    introText: {
      width: "70vw",
      marginTop: "10%",
      height: "70%",
      display: "flex",
      fontWeight: theme.typography.fontWeightBold,
      alignItems: "center",
      padding: theme.spacing(4),
      [theme.breakpoints.up("xs")]: {
        width: "60vw",
        maxWidth: "450px",
      },
    },
    cube: {
      background: theme.palette.augment2,
      borderRadius: 20,
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
export const IntroPage = function ({ className }) {
  const isMobile = useBreakpoint();
  const classes = useStyles();
  console.log(isMobile);
  const ref = useRef();
  return (
    <div
      ref={(el, prev) => {
        ref.current = el?.parentElement;
      }}
      className={`${className} parallax-container`}
    >
      <Parallax parentRef={ref}>
        <Cube rotation={45} left={isMobile ? 200 : 400} top={300} />
        <Cube rotation={15} left={-100} top={50} />
      </Parallax>
      <Typography className={classes.introText} variant="h3">
        Create professional web and mobile applications
      </Typography>
    </div>
  );
};
