import React from "react";
import {
  Frame,
  motion,
  Page,
  Scroll,
  Stack,
  useMotionValue,
  useTransform,
  useCycle,
} from "framer";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";
import Spin from "react-reveal/Spin";
import Wobble from "react-reveal/Wobble";
import config from "react-reveal/globals";
import Box from "@material-ui/core/Box";
import "../App.css";
import KingIcon from "../Images/KingIcon.png";
import SettingsIcon from "@material-ui/icons/Settings";
import AssistantPhotoIcon from "@material-ui/icons/AssistantPhoto";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";

const MobileViewWelcome1stHalf = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
  const [animate, cycle] = useCycle(
    { scale: 0, rotate: 0 },
    { scale: 1.0, rotate: 360 }
  );
  return (
    <motion.div
      drag={"x"}
      x={x}
      scale={scale}
      dragConstraints={{
        left: -100,
        right: 100,
        top: -100,
        bottom: 100,
      }}
      animate={animate}
      transition={{ duration: 10 }}
      onTap={() => cycle()}
      className="Introduction-name-small d-sm-none"
    >
      Welcome
    </motion.div>
  );
};
const MobileViewWelcome2ndHalf = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
  const [animate, cycle] = useCycle(
    { scale: 0, rotate: 0 },
    { scale: 1.0, rotate: 360 }
  );
  return (
    <motion.div
      drag={"x"}
      x={x}
      scale={scale}
      dragConstraints={{
        left: -100,
        right: 100,
        top: -100,
        bottom: 100,
      }}
      animate={animate}
      transition={{ duration: 10 }}
      onTap={() => cycle()}
      className="Introduction-name-small d-sm-none ml-2"
    >
      Rexer{/* find a more suitable icon later on */}
      <img
        src={KingIcon}
        style={{ background: "gray", borderRadius: "50%" }}
        height="50px"
        width="50px"
        alt="kingIcon"
      />{" "}
      !
    </motion.div>
  );
};

const WelcomeHomeScreenMsg1 = () => {
  config({ ssrFadeout: true });
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
  const [animate, cycle] = useCycle(
    { scale: 0, rotate: 0 },
    { scale: 1.5, rotate: 360 }
  );
  const [animate1, cycle1] = useCycle(
    { scale: 0, rotate: 0 },
    { scale: 1.5, rotate: 360, opacity: 1 }
  );
  return (
    <Box m={4} className="child-center">
      <Bounce ssrFadeout>
        <motion.div
          drag={"x"}
          x={x}
          scale={scale}
          dragConstraints={{
            left: -100,
            right: 100,
            top: -100,
            bottom: 100,
          }}
          animate={animate}
          transition={{ duration: 10 }}
          onTap={() => cycle()}
          className="Introduction-name d-none d-sm-inline-block"
        >
          Welcome{" "}
        </motion.div>
        <MobileViewWelcome1stHalf />
      </Bounce>
      <RubberBand style={{ opacity: 0 }}>
        <motion.div
          drag={"x"}
          x={x}
          scale={scale}
          dragConstraints={{
            left: -100,
            right: 100,
            top: -100,
            bottom: 100,
          }}
          animate={animate1}
          transition={{ duration: 10 }}
          onTap={() => cycle1()}
          className="Introduction-name d-none d-sm-inline-block ml-4"
        >
          {" "}
          Rexer
          {/* find a more suitable icon later on */}
          <img
            src={KingIcon}
            style={{ background: "gray", borderRadius: "50%" }}
            height="50px"
            width="50px"
            alt="kingIcon"
          />{" "}
          !
        </motion.div>
        <MobileViewWelcome2ndHalf />
      </RubberBand>
    </Box>
  );
};

const WelcomeHomeScreenMsg2 = () => {
  config({ ssrFadeout: true });
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
  const [animate, cycle] = useCycle(
    { scale: 0, rotate: 0 },
    { scale: 1.5, rotate: 360 }
  );
  return (
    <Box m={4} className="child-center">
      <RubberBand ssrFadeout>
        <motion.div
          drag={"x"}
          x={x}
          scale={scale}
          dragConstraints={{
            left: -100,
            right: 100,
            top: -100,
            bottom: 100,
          }}
          animate={animate}
          transition={{ duration: 10 }}
          onTap={() => cycle()}
          className="Introduction-name d-none d-sm-inline-block"
        >
          Let's create <SettingsIcon /> your dreams together
          <AssistantPhotoIcon />
        </motion.div>
        <MobileViewWelcome1stHalf />
      </RubberBand>
    </Box>
  );
};

const WelcomeHomeScreenMsg3 = () => {
  config({ ssrFadeout: true });
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
  const [animate, cycle] = useCycle(
    { scale: 0, rotate: 0 },
    { scale: 1.5, rotate: 360 }
  );
  return (
    <Box m={4} className="child-center">
      <Spin ssrFadeout>
        <motion.div
          drag={"x"}
          x={x}
          scale={scale}
          dragConstraints={{
            left: -100,
            right: 100,
            top: -100,
            bottom: 100,
          }}
          animate={animate}
          transition={{ duration: 10 }}
          onTap={() => cycle()}
          className="Introduction-name d-none d-sm-inline-block"
        >
          We can bring your idea to life
          <DeviceHubIcon />
        </motion.div>
        <MobileViewWelcome1stHalf />
      </Spin>
    </Box>
  );
};

const WelcomeHomeScreenMsg4 = () => {
  config({ ssrFadeout: true });
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
  const [animate, cycle] = useCycle(
    { scale: 0, rotate: 0 },
    { scale: 1.5, rotate: 360 }
  );
  return (
    <Box m={4} className="child-center">
      <Wobble ssrFadeout>
        <motion.div
          drag={"x"}
          x={x}
          scale={scale}
          dragConstraints={{
            left: -100,
            right: 100,
            top: -100,
            bottom: 100,
          }}
          animate={animate}
          transition={{ duration: 10 }}
          onTap={() => cycle()}
          className="Introduction-name d-none d-sm-inline-block"
        >
          Scroll down
          <ArrowDownwardIcon /> to experience how
        </motion.div>
        <MobileViewWelcome1stHalf />
      </Wobble>
    </Box>
  );
};

function Home() {
  return (
    <Scroll height={"100vh"} width={"100%"}>
      <div onScroll="" class="box">
        <div id="stay-in-place parent-center"></div>

        <div id="move-in-to-place">
          <Box m={4}>
            <h2>YES, we can</h2>
            <footer className="landing-footer bg-secondary"></footer>
          </Box>
        </div>

        <div id="move-in-to-place">
          <Box m={4}>
            <h2>2</h2>
            <footer className="landing-footer bg-secondary"></footer>
          </Box>
        </div>

        <div id="move-in-to-place">
          <Box m={4}>
            <h2>3</h2>
            <footer className="landing-footer bg-secondary"></footer>
          </Box>
        </div>
      </div>
    </Scroll>
  );
}

export default Home;
