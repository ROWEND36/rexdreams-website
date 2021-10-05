import React, { createRef, useEffect, useRef, useState } from "react";
// import { useTransition, animated } from "react-spring";
import Box from "@material-ui/core/Box";
import Landing from "./Landing";
import "./Home.scss";
import { useSwipeable } from "react-swipeable";
import { animate } from "framer-motion";

// import { v4 as uuid } from "uuid";
// import scrollSnapPolyfill from "css-scroll-snap-polyfill";

// document.addEventListener("DOMContentLoaded", scrollSnapPolyfill);
function Home() {
  const gotoNextSlide = (ev) => {
    gotoSlide(ev, 1);
  };
  const gotoPrevSlide = (ev) => {
    gotoSlide(ev, -1);
  };
  const handlers = useSwipeable({
    onSwipedUp: gotoNextSlide,
    onSwipedDown: gotoPrevSlide,
  });
  const gotoSlide = (ev, direction) => {
    const element = ev.event.currentTarget;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;
    console.log({ scrollHeight, clientHeight, scrollTop });
    const currentPage = Math.floor(scrollTop / clientHeight);

    const destScroll = Math.max(
      0,
      Math.min(
        scrollHeight - clientHeight,
        (currentPage + direction) * clientHeight
      )
    );
    console.log({ currentPage, destScroll });
    setScrollTarget({ element, targetScroll: destScroll });
  };
  const [scrollOpts, setScrollTarget] = useState({
    element: null,
    targetScroll: 0,
  });
  useEffect(() => {
    const { targetScroll, element } = scrollOpts;
    if (!element || targetScroll === element.scrollTop) return;
    const controls = animate(element.scrollTop, targetScroll, {
      duration: 0.5,
      onUpdate(value) {
        element.scrollTop = value;
      },
    });
    return () => controls.stop();
  }, [scrollOpts]);

  return (
    <div {...handlers} className="swipeContainer">
      <Landing className="swipeContainer__child" />
      <div className="swipeContainer__child">
        <Box m={4}>
          <h2>YES, we can</h2>
        </Box>
      </div>
      <div className="swipeContainer__child">
        <Box m={4}>
          <h2>2</h2>
        </Box>
      </div>
      <div className="swipeContainer__child">
        <Box m={4}>
          <h2>3</h2>
        </Box>
      </div>
    </div>
  );
}

export default Home;
