import { Document } from "postcss";
import React from "react";
import Cursor from "./components/Cursor";
import Spinner from "./components/Spinner";
import Portfolio from "./Portfolio";
const { useState, useEffect } = React;

export default function index() {
 
  //for initial loading screen
const [Blur, setBlur] = useState(true);
useEffect(() => {
    setTimeout(() => {
      setBlur(false);
    }, 3000);
  }, []);

  return (
    <>
      <Cursor />
      {Blur && <Spinner />}
      {!Blur && <Portfolio />}
    </>
  );
}
