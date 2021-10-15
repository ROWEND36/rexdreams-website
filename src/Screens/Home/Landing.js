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
import { useRef, useState, useCallback, useEffect } from "react";
import { Box, Card, Typography } from "@material-ui/core";
import Slider from "react-slick";
import "./Home.scss";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import landingPageImage from "../../Images/mobile_grayscale.png";
import "slick-carousel/slick/slick.scss";

const useStyles = makeStyles((theme) => ({
  sliderRoot: {
    padding: `${theme.spacing(4)}px 0`,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      paddingTop: 0,
      alignItems: "center",
      "& .slick-slider": {
        width: "100%",
      },
    },
  },
}));
// const MobileViewWelcome1stHalf = () => {
//   const x = useMotionValue(0);
//   const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
//   const [animate, cycle] = useCycle(
//     { scale: 0, rotate: 0 },
//     { scale: 1.0, rotate: 360 }
//   );
//   return (
//     <motion.div
//       drag={"x"}
//       x={x}
//       scale={scale}
//       dragConstraints={{
//         left: -100,
//         right: 100,
//         top: -100,
//         bottom: 100,
//       }}
//       animate={animate}
//       transition={{ duration: 10 }}
//       onTap={() => cycle()}
//       className="Introduction-name-small d-sm-none"
//     >
//       Welcome
//     </motion.div>
//   );
// };
// const MobileViewWelcome2ndHalf = () => {
//   const x = useMotionValue(0);
//   const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
//   const [animate, cycle] = useCycle(
//     { scale: 0, rotate: 0 },
//     { scale: 1.0, rotate: 360 }
//   );
//   return (
//     <motion.div
//       drag={"x"}
//       x={x}
//       scale={scale}
//       dragConstraints={{
//         left: -100,
//         right: 100,
//         top: -100,
//         bottom: 100,
//       }}
//       animate={animate}
//       transition={{ duration: 10 }}
//       onTap={() => cycle()}
//       className="Introduction-name-small d-sm-none ml-2"
//     >
//       Rexer{/* find a more suitable icon later on */}
//       <img
//         src={KingIcon}
//         style={{ background: "gray", borderRadius: "50%" }}
//         height="50px"
//         width="50px"
//         alt="kingIcon"
//       />{" "}
//       !
//     </motion.div>
//   );
// };
//
// const MobileViewWelcomeHomeScreen2 = () => {
//   const x = useMotionValue(0);
//   const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
//   const [animate, cycle] = useCycle(
//     { scale: 0, rotate: 0 },
//     { scale: 1.0, rotate: 360 }
//   );
//   return (
//     <motion.div
//       drag={"x"}
//       x={x}
//       scale={scale}
//       dragConstraints={{
//         left: -100,
//         right: 100,
//         top: -100,
//         bottom: 100,
//       }}
//       animate={animate}
//       transition={{ duration: 10 }}
//       onTap={() => cycle()}
//       className="Introduction-name-small d-sm-none ml-2"
//     >
//       Let's create <SettingsIcon /> your dreams together
//       <AssistantPhotoIcon />
//     </motion.div>
//   );
// };
// const MobileViewWelcomeHomeScreen3 = () => {
//   const x = useMotionValue(0);
//   const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
//   const [animate, cycle] = useCycle(
//     { scale: 0, rotate: 0 },
//     { scale: 1.0, rotate: 360 }
//   );
//   return (
//     <motion.div
//       drag={"x"}
//       x={x}
//       scale={scale}
//       dragConstraints={{
//         left: -100,
//         right: 100,
//         top: -100,
//         bottom: 100,
//       }}
//       animate={animate}
//       transition={{ duration: 10 }}
//       onTap={() => cycle()}
//       className="Introduction-name-small d-sm-none ml-2"
//     >
//       We can bring your idea to life
//       <DeviceHubIcon />
//     </motion.div>
//   );
// };
// const MobileViewWelcomeHomeScreen4 = () => {
//   const x = useMotionValue(0);
//   const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
//   const [animate, cycle] = useCycle(
//     { scale: 1.5, rotate: 0 },
//     { scale: 1.0, rotate: 360 }
//   );
//   return (
//     <motion.div
//       drag={"x"}
//       x={x}
//       scale={scale}
//       dragConstraints={{
//         left: -100,
//         right: 100,
//         top: -100,
//         bottom: 100,
//       }}
//       animate={animate}
//       transition={{ duration: 10 }}
//       onTap={() => cycle()}
//       className="Introduction-name-small d-sm-none ml-2"
//     >
//       Scroll up
//       <ArrowUpwardIcon /> to experience how
//     </motion.div>
//   );
// };

// const WelcomeHomeScreenMsg1 = () => {
//   config({ ssrFadeout: true });
//   const x = useMotionValue(0);
//   const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
//   const [animate, cycle] = useCycle(
//     { scale: 0, rotate: 0 },
//     { scale: 1.5, rotate: 360 }
//   );
//   return (
//     <Box m={4} className="child-center">
//       <Bounce ssrFadeout>
//         <motion.div
//           drag={"x"}
//           x={x}
//           scale={scale}
//           dragConstraints={{
//             left: -100,
//             right: 100,
//             top: -100,
//             bottom: 100,
//           }}
//           animate={animate}
//           transition={{ duration: 10 }}
//           onTap={() => cycle()}
//           className="Introduction-name d-none d-sm-inline-block"
//         >
//           Welcome{" "}
//         </motion.div>
//         <MobileViewWelcome1stHalf />
//       </Bounce>
//       <RubberBand>
//         <motion.div
//           drag={"x"}
//           x={x}
//           scale={scale}
//           dragConstraints={{
//             left: -100,
//             right: 100,
//             top: -100,
//             bottom: 100,
//           }}
//           animate={animate}
//           transition={{ duration: 10 }}
//           onTap={() => cycle()}
//           className="Introduction-name d-none d-sm-inline-block ml-4"
//         >
//           Rexer
//           {/* find a more suitable icon later on */}
//           <img
//             src={KingIcon}
//             style={{ background: "gray", borderRadius: "50%" }}
//             height="50px"
//             width="50px"
//             alt="kingIcon"
//           />{" "}
//           !
//         </motion.div>
//         <MobileViewWelcome2ndHalf />
//       </RubberBand>
//     </Box>
//   );
// };

// const WelcomeHomeScreenMsg2 = () => {
//   config({ ssrFadeout: true });
//   const x = useMotionValue(0);
//   const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
//   const [animate, cycle] = useCycle(
//     { scale: 0, rotate: 0 },
//     { scale: 1.5, rotate: 360 }
//   );
//   return (
//     <Box m={4} className="child-center">
//       <RubberBand ssrFadeout>
//         <motion.div
//           drag={"x"}
//           x={x}
//           scale={scale}
//           dragConstraints={{
//             left: -100,
//             right: 100,
//             top: -100,
//             bottom: 100,
//           }}
//           animate={animate}
//           transition={{ duration: 10 }}
//           onTap={() => cycle()}
//           className="Introduction-name d-none d-sm-inline-block"
//         >
//           Let's create <SettingsIcon /> your dreams together
//           <AssistantPhotoIcon />
//         </motion.div>
//         <MobileViewWelcomeHomeScreen2 />
//       </RubberBand>
//     </Box>
//   );
// };

// const WelcomeHomeScreenMsg3 = () => {
//   config({ ssrFadeout: true });
//   const x = useMotionValue(0);
//   const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
//   const [animate, cycle] = useCycle(
//     { scale: 0, rotate: 0 },
//     { scale: 1.5, rotate: 360 }
//   );
//   return (
//     <Box m={4} className="child-center">
//       <Spin ssrFadeout>
//         <motion.div
//           drag={"x"}
//           x={x}
//           scale={scale}
//           dragConstraints={{
//             left: -100,
//             right: 100,
//             top: -100,
//             bottom: 100,
//           }}
//           animate={animate}
//           transition={{ duration: 10 }}
//           onTap={() => cycle()}
//           className="Introduction-name d-none d-sm-inline-block"
//         >
//           We can bring your idea to life
//           <DeviceHubIcon />
//         </motion.div>
//         <MobileViewWelcomeHomeScreen3 />
//       </Spin>
//     </Box>
//   );
// };

// const WelcomeHomeScreenMsg4 = () => {
//   config({ ssrFadeout: true });
//   const x = useMotionValue(0);
//   const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
//   const [animate, cycle] = useCycle(
//     { scale: 1.3, rotate: 0 },
//     { scale: 1.0, rotate: 360 }
//   );
//   return (
//     <Box m={4} className="child-center">
//       <Wobble ssrFadeout>
//         <motion.div
//           drag={"x"}
//           x={x}
//           scale={scale}
//           dragConstraints={{
//             left: -100,
//             right: 100,
//             top: -100,
//             bottom: 100,
//           }}
//           animate={animate}
//           transition={{ duration: 10 }}
//           onTap={() => cycle()}
//           className="Introduction-name d-none d-sm-inline-block"
//         >
//           Scroll up
//           <ArrowUpwardIcon /> to experience how
//         </motion.div>
//         <MobileViewWelcomeHomeScreen4 />
//       </Wobble>
//     </Box>
//   );
// };

// const pages = [
//   () => {
//     return <WelcomeHomeScreenMsg1 />;
//   },
//   () => {
//     return <WelcomeHomeScreenMsg2 />;
//   },
//   () => {
//     return <WelcomeHomeScreenMsg3 />;
//   },
//   () => {
//     return <WelcomeHomeScreenMsg4 />;
//   },
// ];

const Overlay = function (props) {
  const styles = {
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundPosition: "center",
    backgroundSize: "auto 50%",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
  };
  return (
    <div className="landingPageSlide" style={styles}>
      {props.children}
    </div>
  );
};
export default function Landing({ id, className }) {
  const sliderRef = useRef();
  const theme = useTheme();
  const classes = useStyles();
  const gotoNextSlide = useCallback(() => {
    const slider = sliderRef.current;
    slider.slickNext();
  }, [sliderRef]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "100px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div
      id={id}
      onClick={gotoNextSlide}
      className={`${className} ${classes.sliderRoot}`}
    >
      <Slider ref={sliderRef} {...settings}>
        <Card elevation={4}>
          <Overlay>
            <Typography variant="h4">
              Enter the digital age with <span>RexDreams</span>
            </Typography>
          </Overlay>
        </Card>
        <Card elevation={4}>
          <Overlay>
            <Typography variant="h4">
              Engage your customers on all platforms
            </Typography>
          </Overlay>
        </Card>
        <Card elevation={4}>
          <Overlay>
            <Typography variant="h4">Increase</Typography>
          </Overlay>
        </Card>
      </Slider>
    </div>
  );
}
