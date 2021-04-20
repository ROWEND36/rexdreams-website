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
import "../App.css";
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

function ClickSlide({pages,id,className}){
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeout = useRef(0);
  const gotoNextSlide = useCallback(() => {
    timeout.current = null;
    if (currentSlide + 1 < pages.length) setCurrentSlide(currentSlide + 1);
  }, [currentSlide,pages.length]);

  useEffect(() => {
    timeout.current = setTimeout(gotoNextSlide, 11000);
  }, [gotoNextSlide]);

  const onClick = useCallback(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(gotoNextSlide, 22000);
    }
  }, [gotoNextSlide]);
  
  return <div id={id} className={className} onClick={onClick}>{pages[currentSlide]()}</div>

}

function SwipeSlide(props){
  const panes = useRef([]).current;
  panes.length = 0;
  panes.push(...props.children);
  const STATE_DEFAULT = 0;
  const STATE_SLIDING_UP_INTO = 1;
  const STATE_IN_PLACE = 2;
  const STATE_LAST_SLIDE = 3;
  const STATE_SLIDING_DOWN_OUT = 4;
  const [state,setState] = useState(STATE_DEFAULT);
  
    const fallbackTimeout = useRef(0);
    const [slideInView,setSlideInView] = useState(0);
    const cancelEvent = useCallback(() => {
      clearTimeout(fallbackTimeout.current);
      fallbackTimeout.current = null;
    },[]);
  
    const updateSlide = useCallback(() => {
      cancelEvent();
      if (STATE_DEFAULT === STATE_SLIDING_DOWN_OUT) {
        if (slideInView === 0)
          setState(STATE_DEFAULT);
        else setState(STATE_IN_PLACE);
      } else {
        setSlideInView(slideInView+1);
        if (slideInView === panes.length - 1) setState(STATE_LAST_SLIDE);
        else setState(STATE_IN_PLACE);
      }
    },[cancelEvent,setSlideInView,slideInView,panes.length]);
    
    const detectEvent = useCallback((elt) => {
      if (fallbackTimeout.current) {
        console.error('Bad State');
        cancelEvent();
      }
      fallbackTimeout.current = setTimeout(updateSlide, 2000);
    },[cancelEvent,updateSlide]);
    const showPane = useCallback((elt) => {
      if (state === STATE_SLIDING_DOWN_OUT) {
        cancelEvent();
      }
      detectEvent(elt);
      setState(STATE_SLIDING_UP_INTO);
    },[cancelEvent,detectEvent,state,setState]);
    
    const hidePane = useCallback((elt) => {
      if (state === STATE_SLIDING_UP_INTO) {
        cancelEvent();
      }
      else setSlideInView(slideInView-1);
      detectEvent(elt);
      setState(STATE_SLIDING_DOWN_OUT);
    },[setSlideInView,slideInView,cancelEvent,detectEvent,state,setState]);
    
    const scrollData = useRef({isPressed:false,
       isScrollingUp:false,
       isScrollingDown:false,
       lastX:-1,
       lastY:-1,
       lastT:0,
       startY:-1}).current;
    ;
    const onMouseUp = useCallback((e) => {
      scrollData.isPressed = false;
    },[scrollData]);
    const onMouseDown = useCallback((e) => {
      scrollData.lastY = -1;
      scrollData.isPressed = true;
    },[scrollData]);

    const update = useCallback((x, y) => {
      if (scrollData.lastY < 0) {
        scrollData.lastY = y;
        scrollData.startY = y;
        scrollData.lastX = x;
        scrollData.lastT = new Date().getTime();
        return [0, 0];
      } else {
        let deltaY = y - scrollData.lastY;
        let oldT = scrollData.lastT;
        scrollData.lastT = new Date().getTime();
        scrollData.lastY = y;
        console.log(y + "uuuuuu" + scrollData.startY + " " + state);
        return [1000 * deltaY / (scrollData.lastT - oldT), Math.abs(scrollData.lastY - scrollData.startY)];
      }
    },[scrollData,state]);
    const onMouseMove = useCallback((e) => {
      if(!scrollData.isPressed)return;
      const [velocity, distance] = update(e.clientX, e.clientY);
      if (distance < 15) return console.log(' failed distance ' + distance);
      if (velocity>0) {
        if (state === STATE_SLIDING_UP_INTO) {
          hidePane();
        } else if (distance > 50 &&
          (state === STATE_IN_PLACE ||
            state === STATE_LAST_SLIDE)) {
          hidePane();
        }
      } else {
        /*swiped up*/
        if (state === STATE_SLIDING_DOWN_OUT || (distance > 50 && (state === STATE_IN_PLACE || state === STATE_DEFAULT))) {
          showPane();
        }
      }
    },[hidePane,showPane,update,scrollData,state]);
    const onTouchMove = useCallback((e) => {
      console.log(e);
      e.preventDefault();
      onMouseMove(e);
    },[onMouseMove]);
    
    const onTouchStart = useCallback((e) => {
      console.log(e);
      onMouseDown(e);
    },[onMouseDown]);
    const onTouchEnd = useCallback((e) => {
      console.log(e);
      onMouseUp(e);
    },[onMouseUp]);
    
  return (<div 
  onTouchStart={onTouchStart}
   onMouseDown={onMouseDown} 
   onTouchMove={onTouchMove}
   onMouseMove={onMouseMove}
   onTouchEnd={onTouchEnd}
   onMouseUp={onMouseUp}
   className={props.className}>
    {panes.map((e,i)=>{
      if(i<=slideInView)return e;
      if(i===slideInView+1 && state === STATE_SLIDING_UP_INTO)return e;
      else return "" && React.cloneElement(e,{className:"offscreen-page"}); 
    })}
  </div>)
}

function Home() {
  return (
    <Scroll
      height="100vh"
      width="100%"
    >
      <SwipeSlide className="box">
        <ClickSlide id="stay-in-place" className="onscreen-page" pages={pages}/>;
        <div className="onscreen-page">
          <Box m={4}>
            <h2>YES, we can</h2>
            <footer className="landing-footer bg-secondary"></footer>
          </Box>
        </div>

        <div className="onscreen-page">
          <Box m={4}>
            <h2>2</h2>
            <footer className="landing-footer bg-secondary"></footer>
          </Box>
        </div>

        <div className="onscreen-page">
          <Box m={4}>
            <h2>3</h2>
            <footer className="landing-footer bg-secondary"></footer>
          </Box>
        </div>
      </SwipeSlide>
    </Scroll>
  );
}

export default Home;
