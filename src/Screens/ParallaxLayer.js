import { useEffect, useRef, useState } from "react";

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
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  useEffect(
    function () {
      const parent = parentRef.current;
      if (parent) {
        const update = function (ev) {
          const target = ev.target;
          setScrollX(target.scrollLeft);
          setScrollY(target.scrollTop);
          console.log(target.scrollTop, target.scrollLeft);
        };

        parent.addEventListener("scroll", update);
        return () => {
          parent.removeEventListener("scroll", update);
        };
      }
    },
    [parentRef]
  );
  return (
    <div
      style={{
        left: (1 - scrollMultiplier) * scrollX,
        top: (1 - scrollMultiplier) * scrollY,
        width: `${width}px`,
        height: `${height}px`,
        position: "absolute",
        zIndex: Math.floor((scrollMultiplier - 1) * 10),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
