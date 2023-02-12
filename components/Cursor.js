import React from "react";
const { useState, useEffect } = React;

// const isMobile = () => {
//   const ua = navigator.userAgent;
//   return /Android|Mobi/i.test(ua);
// };
const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    handleLinkHoverEvents();
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // useEffect(() => {
  //   handleLinkHoverEvents();
  // }, [clicked]);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll(".hov,a,h1,h2,h3,h4,h5,h6,span").forEach((el) => {
      el.addEventListener("mouseover", () => {
        setLinkHovered(true);
      });
      el.addEventListener("mouseout", () => {
        setLinkHovered(false);
      });
    });
  };
  const cursorClasses = `cursor ${clicked && " cursor--clicked "} ${
    hidden && "cursor--hidden"
  } ${linkHovered && "cursor--link-hovered"}`;

  // if (typeof navigator !== "undefined" && isMobile()) return (<div></div>);
  return (
    <div
      className={`${cursorClasses} hidden md:block`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default Cursor;
