import React, { useRef } from "react";
// import { useTransition, animated } from "react-spring";
import Box from "@material-ui/core/Box";
import Landing from "./Landing";
import "./Home.scss";
import { useSwipeable } from "react-swipeable";

// import { v4 as uuid } from "uuid";
// import scrollSnapPolyfill from "css-scroll-snap-polyfill";

// document.addEventListener("DOMContentLoaded", scrollSnapPolyfill);
function Home() {
  const gotoNextSlide = () => {
    gotoSlide(1);
  };
  const gotoPrevSlide = () => {
    gotoSlide(-1);
  };
  const handlers = useSwipeable({
    onSwipedUp: gotoNextSlide,
    onSwipedDown: gotoPrevSlide,
  });
  const ourRef = useRef();

  const gotoSlide = (direction) => {
    if (!ourRef.current) return console.warn("object");
    const scrollTop = ourRef.current.scrollTop;
    const scrollHeight = ourRef.current.scrollHeight;
    const clientHeight = ourRef.current.clientHeight;
    const currentPage = scrollTop % clientHeight;
    const destScroll = Math.max(
      0,
      Math.min(
        scrollHeight - clientHeight,
        (currentPage + direction) * clientHeight
      )
    );
    ourRef.current.scrollTop = destScroll;
  };
  return (
    <div ref={ourRef} {...handlers} className="swipeContainer">
      <Landing className="swipeContainer__child" />
      <div className="swipeContainer__child">
        <Box m={4}>
          <h2>YES, we can</h2>
          <footer className="landing-footer bg-secondary"></footer>
        </Box>
      </div>
      <div className="swipeContainer__child">
        <Box m={4}>
          <h2>2</h2>
          <footer className="landing-footer bg-secondary"></footer>
        </Box>
      </div>
      <div className="swipeContainer__child">
        <Box m={4}>
          <h2>3</h2>
          <footer className="landing-footer bg-secondary"></footer>
        </Box>
      </div>
    </div>
  );
}

export default Home;
