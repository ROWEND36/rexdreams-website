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
import config from "react-reveal/globals";
import Box from "@material-ui/core/Box";
import "../App.css";
import KingIcon from "../Images/KingIcon.png";

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

const WelcomeHomeScreen = () => {
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

function Home() {
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
