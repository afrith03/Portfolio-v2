import { Document } from "postcss";
import React from "react";
import Cursor from "./components/Cursor";
import Spinner from "./components/Spinner";
import Portfolio from "./Portfolio";
const { useState, useEffect } = React;

export default function Index() {
  //for initial loading screen
  // const [blur, setBlur] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setBlur(false);
  //   }, 2000);
  // }, []);

  return (
    <>
      <Cursor />
      <div className="hidden">
        <h1>Afrith</h1>
        <h2>Afrith Shariff</h2>
        <h3>Afrith me</h3>
        <p>
          Hi, I’m Afrith! I’m a developer with in-depth experience in React and
          ServiceNow. I create websites that help organizations address business
          challenges and meet their needs. My expertise lies within front-end
          web apps, and the main languages in my tech stack are JavaScript ,
          React , and HTML/CSS. I’m a lifelong learner (currently taking
          ServiceNow Development as the primary focus!) and love to read, code,
          and find new inspiration in nature. I offer from a wide range of
          services, including brand design, programming and teaching.
        </p>
      </div>
      <Portfolio />
      {/* {blur && <Spinner />} */}
      {/* {!blur && <Portfolio />} */}
    </>
  );
}
