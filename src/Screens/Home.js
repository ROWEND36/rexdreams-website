import React, { useRef, useEffect, useState, useCallback } from "react";
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
import { useTransition, animated } from "react-spring";
import Bounce from "react-reveal/Bounce";
import RubberBand from "react-reveal/RubberBand";
import Spin from "react-reveal/Spin";
import Wobble from "react-reveal/Wobble";
import config from "react-reveal/globals";
import Box from "@material-ui/core/Box";
import "../App.scss";
import KingIcon from "../Images/KingIcon.png";
import SettingsIcon from "@material-ui/icons/Settings";
import AssistantPhotoIcon from "@material-ui/icons/AssistantPhoto";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import { uuid } from "uuidv4";
import { animate } from "framer-motion";

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

const MobileViewWelcomeHomeScreen2 = () => {
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
      Let's create <SettingsIcon /> your dreams together
      <AssistantPhotoIcon />
    </motion.div>
  );
};
const MobileViewWelcomeHomeScreen3 = () => {
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
      We can bring your idea to life
      <DeviceHubIcon />
    </motion.div>
  );
};
const MobileViewWelcomeHomeScreen4 = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
  const [animate, cycle] = useCycle(
    { scale: 1.5, rotate: 0 },
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
      Scroll down
      <ArrowDownwardIcon /> to experience how
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
      <RubberBand>
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
          className="Introduction-name d-none d-sm-inline-block ml-4"
        >
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
        <MobileViewWelcomeHomeScreen2 />
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
        <MobileViewWelcomeHomeScreen3 />
      </Spin>
    </Box>
  );
};

const WelcomeHomeScreenMsg4 = () => {
  config({ ssrFadeout: true });
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [1.5, 0.5]);
  const [animate, cycle] = useCycle(
    { scale: 1.3, rotate: 0 },
    { scale: 1.0, rotate: 360 }
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
        <MobileViewWelcomeHomeScreen4 />
      </Wobble>
    </Box>
  );
};

const pages = [
  () => {
    return <WelcomeHomeScreenMsg1 />;
  },
  () => {
    return <WelcomeHomeScreenMsg2 />;
  },
  () => {
    return <WelcomeHomeScreenMsg3 />;
  },
  () => {
    return <WelcomeHomeScreenMsg4 />;
  },
];

function Home() {
  useEffect(() => {
    var $hours = document.getElementById("hours");
    var $minutes = document.getElementById("minutes");

    setTimeout(function () {
      "use strict";

      var hours = new Date().getHours();
      var minutes = new Date().getMinutes();

      if (hours >= 6 && hours < 12) {
        $hours.className = "left";
      } else {
        $hours.className = "right";
      }

      if (minutes <= 30) {
        $minutes.className = "back left";
      } else {
        $minutes.className = "left";
      }

      set($hours, 30 * hours);
      set($minutes, 6 * minutes);
    }, 1000);

    function set($elmt, deg) {
      "use strict";

      if ($elmt.id === "hours" && deg < 180) {
        deg = deg - 5;
      }

      if ($elmt.id === "minutes" && deg < 180) {
        deg = deg + 5;
      } else {
        deg = deg - 5;
      }

      $elmt.style.transform = "rotate(" + deg + "deg)";
      $elmt.style.webkitTransform = "rotate(" + deg + "deg)";
    }
  });
  useEffect(() => {
    //arrangement in slides
    var home_pane = document.getElementsByClassName("home_pane")[0];
    var pane1 = document.getElementsByClassName("pane1")[0];
    var pane2 = document.getElementsByClassName("pane2")[0];
    var pane3 = document.getElementsByClassName("pane3")[0];
    const panes = [home_pane, pane1, pane2, pane3];
    const showPane = (el) => {
      if (state === STATE_SLIDING_DOWN_OUT) {
        cancelEvent();
      }
      detectEvent(el);
      el.style.top = 0;
      el.style.opacity = 1;
      state = STATE_SLIDING_UP_INTO;
    };
    const hidePane = (el) => {
      if (state === STATE_SLIDING_UP_INTO) {
        cancelEvent();
      }
      detectEvent(el);
      el.style.top = "100%";
      el.style.opacity = 0;
      state = STATE_SLIDING_DOWN_OUT;
    };
    var fallbackTimeout, trackEl;
    const detectEvent = (el) => {
      if (fallbackTimeout) {
        console.error("Bad State");
        cancelEvent();
      }
      trackEl = el;
      el.addEventListener("transitionend", updateSlide);
      fallbackTimeout = setTimeout(updateSlide, 2000);
    };
    const updateSlide = () => {
      const el = trackEl;
      cancelEvent();
      if (state == STATE_SLIDING_DOWN_OUT) {
        el.style.top = "100%";
        el.style.opacity = 0;
        if (slideInView == 0) state = STATE_DEFAULT;
        else state = STATE_IN_PLACE;
      } else {
        el.style.top = 0;
        el.style.opacity = 1;
        slideInView++;
        if (slideInView == panes.length - 1) state = STATE_LAST_SLIDE;
        else state = STATE_IN_PLACE;
      }
    };
    const cancelEvent = () => {
      trackEl.removeEventListener("transitionend", updateSlide);
      clearTimeout(fallbackTimeout);
      trackEl = null;
      fallbackTimeout = null;
    };
    const onTouchStart = (e) => {
      onMouseDown(e.touches[0]);
    };
    const onTouchEnd = (e) => {
      onMouseUp(e.touches[0]);
    };
    const onTouchMove = (e) => {
      onMouseMove(e.touches[0]);
    };
    var isPressed, isScrollingUp, isScrollingDown, lastX, lastY, lastT, startY;
    const onMouseUp = (e) => {
      isPressed = false;
    };
    const onMouseDown = (e) => {
      lastY = -1;
      isPressed = true;
    };

    const update = (x, y) => {
      if (lastY < 0) {
        lastY = y;
        startY = y;
        lastX = x;
        lastT = new Date().getTime();
        return [0, 0];
      } else {
        let deltaY = y - lastY;
        let oldT = lastT;
        lastT = new Date().getTime();
        lastY = y;
        console.log(y + "uuuuuu" + startY + " " + state);
        return [(1000 * deltaY) / (lastT - oldT), Math.abs(lastY - startY)];
      }
    };
    const STATE_DEFAULT = 0;
    const STATE_SLIDING_UP_INTO = 1;
    const STATE_IN_PLACE = 2;
    const STATE_LAST_SLIDE = 3;
    const STATE_SLIDING_DOWN_OUT = 4;
    var state = STATE_DEFAULT;
    var slideInView = 0;
    const onMouseMove = (e) => {
      const [velocity, distance] = update(e.clientX, e.clientY);
      var swipedUp, swipedDown;
      if (distance < 15)
        return console.log(velocity + " failed distance " + distance);
      if (velocity > 256) {
        swipedDown = true;
      } else if (velocity < 256) {
        swipedUp = true;
      } else {
        return console.log("failed velocity");
      }
      if (swipedDown) {
        if (state === STATE_SLIDING_UP_INTO) {
          hidePane(panes[slideInView + 1]);
        } else if (
          distance > 50 &&
          (state === STATE_IN_PLACE || state === STATE_LAST_SLIDE)
        ) {
          hidePane(panes[slideInView]);
          slideInView--;
        }
      } else {
        /*swiped up*/
        if (
          state === STATE_SLIDING_DOWN_OUT ||
          (distance > 50 &&
            (state === STATE_IN_PLACE || state === STATE_DEFAULT))
        ) {
          showPane(panes[slideInView + 1]);
        }
      }
    };
    var carousel_container = document.getElementsByClassName(
      "carousel_container"
    )[0];
    carousel_container.addEventListener("touchstart", onTouchStart);
    carousel_container.addEventListener("mousedown", onMouseDown);
    carousel_container.addEventListener("touchmove", onTouchMove);
    carousel_container.addEventListener("mousemove", onMouseMove);
    carousel_container.addEventListener("touchend", onTouchEnd);
    carousel_container.addEventListener("mouseup", onMouseUp);
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeout = useRef(0);
  const inScroll = useRef(false);
  const gotoNextSlide = useCallback(() => {
    timeout.current = null;
    if (currentSlide + 1 < pages.length) setCurrentSlide(currentSlide + 1);
  }, [currentSlide]);

  useEffect(() => {
    timeout.current = setTimeout(gotoNextSlide, 11000);
  }, [gotoNextSlide]);

  const clearScroll = useCallback(() => {
    inScroll.current = false;
  });

  // const handleScroll = useCallback((i) => {
  //   if (inScroll.current) return;
  //   const offset = i.offset.y;
  //   const current = contentOffsetY.get();
  //   const page = Math.floor(-current / window.innerHeight);
  //   var destination;
  //   if (page < 1) {
  //     destination = 0;
  //   } else if (offset < 0) {
  //     //scroll down
  //     destination = -(page + 1) * window.innerHeight;
  //   } else return;
  //   const THRESHOLD = window.innerHeight * 0.25;
  //   // if (Math.abs(offset) > 40) console.log({ current, offset, destination });

  //   console.log({ page, offset, destination, current });
  //   if (Math.abs(current - destination) > THRESHOLD) {
  //     inScroll.current = true;
  //     contentOffsetY.set(destination);
  //   }
  //   //animate(contentOffsetY, destination);
  // });
  const contentOffsetY = useMotionValue(0);

  const onClick = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(gotoNextSlide, 22000);
    }
  }, [gotoNextSlide]);
  return (
    <body>
      <Scroll
        contentOffsetY={contentOffsetY}
        // onScrollEnd={handleScroll}
        onScrollStart={clearScroll}
        height={"100vh"}
        width={"100%"}
      >
        <div class="carousel_container">
          <div id="home_pane" class="carousel_item">
            <div class="middle">{pages[currentSlide]()}</div>
          </div>
          <div id="pane1" class="carousel_item">
            <Box m={4}>
              <div id="watch">
                <div class="digit">
                  <span>1</span>
                </div>
                <div class="digit">
                  <span>2</span>
                </div>
                <div class="digit">
                  <span>3</span>
                </div>
                <div class="digit">
                  <span>4</span>
                </div>
                <div class="digit">
                  <span>5</span>
                </div>
                <div class="digit">
                  <span>6</span>
                </div>
                <div class="digit">
                  <span>7</span>
                </div>
                <div class="digit">
                  <span>8</span>
                </div>
                <div class="digit">
                  <span>9</span>
                </div>
                <div class="digit">
                  <span>10</span>
                </div>
                <div class="digit">
                  <span>11</span>
                </div>
                <div class="digit">
                  <span>12</span>
                </div>
                <div id="mickey"></div>
                <div class="left" id="hours"></div>
                <div class="right" id="minutes"></div>
              </div>
            </Box>
          </div>
          <div id="pane2" class="carousel_item">
            <div id="watch">
              <div class="digit">
                <span>1</span>
              </div>
              <div class="digit">
                <span>2</span>
              </div>
              <div class="digit">
                <span>3</span>
              </div>
              <div class="digit">
                <span>4</span>
              </div>
              <div class="digit">
                <span>5</span>
              </div>
              <div class="digit">
                <span>6</span>
              </div>
              <div class="digit">
                <span>7</span>
              </div>
              <div class="digit">
                <span>8</span>
              </div>
              <div class="digit">
                <span>9</span>
              </div>
              <div class="digit">
                <span>10</span>
              </div>
              <div class="digit">
                <span>11</span>
              </div>
              <div class="digit">
                <span>12</span>
              </div>
              <div id="mickey"></div>
              <div class="left" id="hours"></div>
              <div class="right" id="minutes"></div>
            </div>
          </div>
          <div id="pane3" class="carousel_item">
            <Box m={4}>
              <h2>3</h2>
              <footer className="landing-footer bg-secondary"></footer>
            </Box>
          </div>
        </div>
      </Scroll>
    </body>
  );
}

export default Home;
