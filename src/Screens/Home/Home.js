import React, { useEffect, useRef, useState } from "react";
// import { useTransition, animated } from "react-spring";
import Box from "@material-ui/core/Box";
import Landing from "./Landing";
import "./Home.scss";
import { useSwipeable } from "react-swipeable";
import { animate } from "framer-motion";
import App from "../App/App";
import Aos from "aos";
import "aos/dist/aos.css";
import { IntroPage } from "./IntroPage";

/**@param el {HTMLElement}
 * @param y {number}
 * @param h {number}
 * @param direction {(1|-1)}
 */
const getTargetScrollTop = function (el, y, h, direction) {
  const children = el.children;
  let lastY = 0;
  for (const x of children) {
    let offset = x.offsetTop;
    if (x.offsetParent !== el) {
      offset -= el.offsetTop;
    }
    if (offset >= y) {
      if (direction < 0) {
        return lastY;
      } else if (offset !== y) {
        return offset;
      }
    }
    lastY = offset;
  }
  return lastY;
};
function Home() {
  const gotoNextSlide = (ev) => {
    gotoSlide(ev, 1);
  };
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const gotoPrevSlide = (ev) => {
    gotoSlide(ev, -1);
  };
  const handlers = useSwipeable({
    onSwipedUp: gotoNextSlide,
    onSwipedDown: gotoPrevSlide,
    trackMouse: true,
  });
  const ref = useRef(null);
  const gotoSlide = (ev, direction) => {
    const element = ref.current;
    if (!element) return;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    const destScroll = Math.max(
      0,
      Math.min(
        scrollHeight - clientHeight,
        getTargetScrollTop(element, scrollTop, clientHeight, direction)
      )
    );
    setScrollTarget({ element, targetScroll: destScroll });
  };
  const [scrollOpts, setScrollTarget] = useState({
    element: null,
    targetScroll: 0,
  });
  const refPassThrough = (el) => {
    ref.current = el;
    handlers.ref(el);
  };
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
    <App>
      <div {...handlers} ref={refPassThrough} className="swipeContainer">
        <IntroPage className="swipeContainer__child" />

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
    </App>
  );
}

export default Home;
