import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
/**
   Used to provide parallax background effects.
 * @param params {Object}
 * @param params.scrollMultiplier {number} - The higher the value, the closer the layer. Should typically be less than one.
 * @param [params.parentRef] {{current?:HTMLElement}} - The parent element whose scroll is tracked
 */
export function Parallax({
  scrollMultiplier = 0.5,
  parentRef,
  width = 1000000,
  height = 1000000,
  children,
  style,
  ...props
}) {
  const x = useMotionValue(1);
  const y = useMotionValue(1);
  useEffect(
    function () {
      const target = parentRef
        ? parentRef.current
        : document.scrollingElement || document.documentElement;
      if (target) {
        const update = function (ev) {
          x.set((1 - scrollMultiplier) * target.scrollLeft + 1);
          y.set((1 - scrollMultiplier) * target.scrollTop + 1);
        };
        update();
        (parentRef ? target : window).addEventListener("scroll", update);
        return () => {
          (parentRef ? target : window).removeEventListener("scroll", update);
        };
      }
    },
    [parentRef, scrollMultiplier, x, y]
  );
  return (
    <motion.div
      style={{
        x: x,
        y: y,
        width: `${width}px`,
        height: `${height}px`,
        position: "absolute",
        zIndex: Math.floor((scrollMultiplier - 1) * 10),
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
