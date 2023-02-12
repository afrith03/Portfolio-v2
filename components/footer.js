import React from "react";
import { AiFillCopyrightCircle, AiOutlineGithub } from "react-icons/ai";
const Footer = () => {
  return (<div className="p-5">
    <div className="text-center text-sm md:text-md dark:text-white text-slate-700">
      <p className="inline-flex">
        Designed & Built by
        <span>
          <AiFillCopyrightCircle className="m-1 text-teal-500" />
        </span>
       <a target="_blank"  rel="noreferrer"  href="https://www.linkedin.com/in/afrithshariff/"><span className="text-teal-500"> Afrith </span>,</a> 
      </p>
    </div>
    <div className="text-center text-sm md:text-md dark:text-white mb-3">
      <p className="inline-flex">
       All source code
        availabe at <AiOutlineGithub className="m-1 text-teal-500" />
        <a target="_blank"  rel="noreferrer"  href="https://github.com/afrith03/Portfolio-v2">
          <span className="text-teal-500">Github</span>{" "}
        </a>
      </p>
    </div>
    </div>
  );
};

export default Footer;
