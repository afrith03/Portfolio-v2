import React from "react";
import styles from "../../styles/otherprojects.module.css";
import npm from "../../public/afrith-js.png";
import Image from "next/image";
function OtherProjects() {
  return (
    <div>
      <h3 className="text-3xl py-1 font-bold text-slate-700 dark:text-white text-right">
        Other notewothy projects.
      </h3>
      <div className={styles["card"]}>
        <div className={styles["content"]}>
          <div className={styles["front"]}>
            <h3 className={styles["title"]}>Afrith.js</h3>
            <p className={styles["subtitle"]}>
              Afrith.js is a simple npm package which console logs Vadivelu's
              picture in console
            </p>
          </div>

          <div className={styles["back"]}>
            <Image src={npm} className={styles["description"]}
             />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherProjects;
