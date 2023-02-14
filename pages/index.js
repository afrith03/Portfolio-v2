import React from "react";
import Birds from "../components/Birds";
import Cursor from "/components/Cursor";
import Portfolio from "/pages/Portfolio";
export default function Index() {
  return (
    <>
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
      <Cursor />
      {/* This Div contains Global class applied for bird animation for the styles please refer BirdAnimation.css   */}
      <div className="container1 container-bird">
        <Birds />
        <Portfolio />
        {/* This Div contains Global class applied for bird animation for the styles please refer BirdAnimation.css   */}
      </div>
    </>
  );
}
