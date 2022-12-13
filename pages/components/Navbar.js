import React from "react";
import {
  BsFillMoonStarsFill,
  BsCloudSun,
  BsClipboardData,
} from "react-icons/bs";
import styles from "../../styles/navbar.module.css";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="py-10 px-2 md:px-0 mb-12 flex justify-between dark:text-white">
      <h1 className="font-burtons text-xl">about me</h1>
      <ul className="flex items-center z-50">
        <div>
          <div className={styles.toggleWrapper}>
            <input
              type="checkbox"
              className={styles.dn}
              id="dn"
              checked={darkMode}
              onChange={() => {
                setDarkMode(!darkMode);
              }}
            />
            <label htmlFor="dn" className={styles.toggle}>
              <checker className={styles.toggle__handler}>
                <checker
                  className={styles["crater"] + " " + styles["crater--1"]}
                />
                <checker
                  className={styles["crater"] + " " + styles["crater--2"]}
                />
                <checker
                  className={styles["crater"] + " " + styles["crater--3"]}
                />
              </checker>
              <checker className={styles["star"] + " " + styles["star--1"]} />
              <checker className={styles["star"] + " " + styles["star--2"]} />
              <checker className={styles["star"] + " " + styles["star--3"]} />
              <checker className={styles["star"] + " " + styles["star--4"]} />
              <checker className={styles["star"] + " " + styles["star--5"]} />
              <checker className={styles["star"] + " " + styles["star--6"]} />
            </label>
          </div>
        </div>
        {/* <button
        
        >
          {darkMode ? (
            <BsCloudSun className="animate-wiggle cursor-pointer text-2xl" />
          ) : (
            <BsFillMoonStarsFill className="animate-wiggle cursor-pointer text-2xl" />
          )}
        </button> */}
        <li>
          <button
            className="animate-[wiggle_10s_ease-in-out_infinite] font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 flex"
            href="#"
          >
            Resume <BsClipboardData className="m-1" />
          </button>

          {/* <button className={styles["download-button"]}>
            <div className={styles.docs}>
              <svg
                className={styles['css-i6dzq1']}
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                height={20}
                width={20}
                viewBox="0 0 24 24"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line y2={13} x2={8} y1={13} x1={16} />
                <line y2={17} x2={8} y1={17} x1={16} />
                <polyline points="10 9 9 9 8 9" />
              </svg>{" "}
              Docs
            </div>
            <div className={styles.download}>
              <svg
                className="css-i6dzq1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                height={24}
                width={24}
                viewBox="0 0 24 24"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line y2={3} x2={12} y1={15} x1={12} />
              </svg>
            </div>
          </button> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
