import React from "react";
import {
  BsFillMoonStarsFill,
  BsCloudSun,
  BsClipboardData,
} from "react-icons/bs";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-10 px-2 md:px-0 mb-12 flex justify-between dark:text-white">
      <h1
        className="font-burtons text-xl"
      >
        about me
      </h1>
      <ul className="flex items-center z-50">
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <BsCloudSun className="animate-wiggle cursor-pointer text-2xl" />
          ) : (
            <BsFillMoonStarsFill className="animate-wiggle cursor-pointer text-2xl" />
          )}
        </button>
        <li>
          <button
            className="animate-[wiggle_10s_ease-in-out_infinite] font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 flex"
            href="#"
          >
            Resume <BsClipboardData className="m-1" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
