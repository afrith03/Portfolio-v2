import { Document } from "postcss";
import React from "react";
import Portfolio from "./Portfolio";
const { useState, useEffect } = React;

export default function index() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, []);

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
    document
      .querySelectorAll(".hov,a,h1,h2,h3,h4,h5,h6,span")
      .forEach((el) => {
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

  //Console logs
  // "cursor--clicked": clicked,
  // "cursor--hidden": hidden,
  // "cursor--link-hovered": linkHovered
  // console.log(position);

  return (
    <>
      <div
        className={cursorClasses}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div className="bg-[url(../public/music-player.png)] bg-[url(../public/almiraaj.png)] bg-[url(../public/afrith-js.png)] bg-[url(../public/news-monkey.png)] bg-[url(../public/text-utils.png)] bg-[] bg-[]"></div>
      <Portfolio />
    </>
  );
}
