import React from "react";

function About() {
  return (
    <div className="p-2 md:p-0">
      <h3 className="text-3xl font-bold text-slate-700 py-1 dark:text-white ">
        Who am I?
      </h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Hi, I{"’"}m  <a href="https://www.linkedin.com/in/afrithshariff/" target="_blank" rel="noopener noreferrer"><span className="text-teal-500"> Afrith! </span></a> I{"’"}m a
        developer with in-depth experience in React and ServiceNow. I create
        websites that help organizations address business challenges and meet
        their needs. My expertise lies within front-end web apps, and the main
        languages in my tech stack are
        <a
          href="https://www.javascript.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-teal-500"> JavaScript </span>
        </a>
        ,
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-teal-500"> React </span>
        </a>
        , and  <a
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-teal-500"> Node.js </span>
        </a>. I{"’"}m a lifelong learner {"("}currently taking{" "}
        <a
          href="https://www.servicenow.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-teal-500">ServiceNow </span>
        </a>
        Development as the primary focus!{")"} and love to read, code, and find
        new inspiration in nature.
      </p>
      {/* <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I offer from a wide range of services, including brand design,
        programming and teaching.
      </p> */}
    </div>
  );
}

export default About;
