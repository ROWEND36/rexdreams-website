import React, { useRef, useState, useMemo, useCallback } from "react";
export default function SwipeSlide(props) {
  const panes = useRef([]).current;
  panes.length = 0;
  panes.push(...props.children);
  const STATE_DEFAULT = 0;
  const STATE_SLIDING_UP_INTO = 1;
  const STATE_IN_PLACE = 2;
  const STATE_LAST_SLIDE = 3;
  const STATE_SLIDING_DOWN_OUT = 4;

  const [state, setState] = useState(STATE_DEFAULT);

  const fallbackTimeout = useRef(0);
  const [slideInView, setSlideInView] = useState(0);
  const cancelEvent = useCallback(() => {
    clearTimeout(fallbackTimeout.current);
    fallbackTimeout.current = null;
  }, []);

  let updateSlideRef = useRef(null);
  updateSlideRef.current = useMemo(
    () => () => {
      cancelEvent();
      if (state === STATE_SLIDING_DOWN_OUT) {
        if (slideInView === 0) setState(STATE_DEFAULT);
        else setState(STATE_IN_PLACE);
      } else {
        setSlideInView(slideInView + 1);
        if (slideInView + 1 === panes.length - 1) setState(STATE_LAST_SLIDE);
        else setState(STATE_IN_PLACE);
      }
    },
    [state, setState, cancelEvent, setSlideInView, slideInView, panes]
  );
  const detectEvent = useCallback(() => {
    if (fallbackTimeout.current) {
      console.error("Bad State");
      cancelEvent();
    }
    fallbackTimeout.current = setTimeout(() => {
      updateSlideRef.current();
    }, 2000);
  }, [cancelEvent]);
  const showPane = useCallback(
    (elt) => {
      if (state === STATE_SLIDING_DOWN_OUT) {
        cancelEvent();
      }
      detectEvent(elt);
      setState(STATE_SLIDING_UP_INTO);
    },
    [cancelEvent, detectEvent, state, setState]
  );

  const hidePane = useCallback(
    (elt) => {
      if (state === STATE_SLIDING_UP_INTO) {
        cancelEvent();
      } else {
        console.assert(
          state === STATE_IN_PLACE ||
            state === STATE_DEFAULT ||
            state === STATE_LAST_SLIDE
        );
        setSlideInView(slideInView - 1);
      }
      detectEvent(elt);
      setState(STATE_SLIDING_DOWN_OUT);
    },
    [setSlideInView, slideInView, cancelEvent, detectEvent, state, setState]
  );

  const scrollData = useRef({
    isPressed: false,
    lastX: -1,
    lastY: -1,
    lastT: 0,
    needsReset: true,
    hasTouchMove: false,
    startY: -1,
  }).current;
  const onMouseUp = useCallback(() => {
    scrollData.isPressed = false;
  }, [scrollData]);
  const onMouseDown = useCallback(() => {
    scrollData.needsReset = true;
    scrollData.hasTouchMove = false;
    scrollData.isPressed = true;
  }, [scrollData]);

  const update = useCallback(
    (x, y) => {
      if (scrollData.needsReset) {
        scrollData.lastY = y;
        scrollData.needsReset = false;
        scrollData.startY = y;
        scrollData.lastX = x;
        scrollData.lastT = new Date().getTime();
        return [0, 0];
      } else {
        let deltaY = y - scrollData.lastY;
        let oldT = scrollData.lastT;
        scrollData.lastT = new Date().getTime();
        scrollData.lastY = y;
        return [
          (1000 * deltaY) / (scrollData.lastT - oldT),
          Math.abs(scrollData.lastY - scrollData.startY),
        ];
      }
    },
    [scrollData]
  );
  const onMouseMove = useCallback(
    (e, fromTouch) => {
      if (!scrollData.isPressed) return;
      if (scrollData.hasTouchMove && fromTouch !== true) return;
      const [velocity, distance] = update(e.clientX, e.clientY);
      if (distance < 15) return;
      if (velocity > 100) {
        if (state === STATE_SLIDING_UP_INTO) {
          hidePane();
        } else if (
          distance > 50 &&
          (state === STATE_IN_PLACE || state === STATE_LAST_SLIDE)
        ) {
          hidePane();
        }
      } else if (velocity < 100) {
        /*swiped up*/
        if (
          state === STATE_SLIDING_DOWN_OUT ||
          (distance > 50 &&
            (state === STATE_IN_PLACE || state === STATE_DEFAULT))
        ) {
          showPane();
        }
      }
    },
    [hidePane, showPane, update, scrollData, state]
  );
  const onTouchMove = useCallback(
    (e) => {
      scrollData.hasTouchMove = true;
      if (e.touches.length === 1) onMouseMove(e.touches[0], true);
    },
    [onMouseMove, scrollData]
  );

  const onTouchStart = useCallback(
    (e) => {
      onMouseDown(e);
    },
    [onMouseDown]
  );
  const onTouchEnd = useCallback(
    (e) => {
      onMouseUp(e);
    },
    [onMouseUp]
  );

  return (
    <div
      onTouchStart={onTouchStart}
      onMouseDown={onMouseDown}
      onTouchMove={onTouchMove}
      onMouseMove={onMouseMove}
      onTouchEnd={onTouchEnd}
      onMouseUp={onMouseUp}
      className={props.className}
    >
      {React.Children.map(props.children, (e, i) => {
        if (i <= slideInView) return e;
        if (i === slideInView + 1 && state === STATE_SLIDING_UP_INTO)
          return React.cloneElement(e, {
            onTransitionEnd: () => {
              updateSlideRef.current();
            },
          });
        let a = React.cloneElement(e, { className: "offscreen-page" });
        return a;
      })}
    </div>
  );
}
