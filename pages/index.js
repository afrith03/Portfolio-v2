import { Document } from "postcss";
import React from "react";
import Cursor from "./components/Cursor";
import Spinner from "./components/Spinner";
import Portfolio from "./Portfolio";
const { useState, useEffect } = React;

export default function Index() {
  //for initial loading screen
const [blur, setBlur] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setBlur(false);
    }, 2000);
  }, []);

  return (
    <>
      <Cursor />

      {blur && <Spinner />}
      {!blur && <Portfolio />}
    </>
  );
}
