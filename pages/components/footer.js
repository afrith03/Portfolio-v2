import React from "react";
import { AiFillCopyrightCircle, AiOutlineGithub } from "react-icons/ai";
const Footer = () => {
  return (<div className="p-5">
    <div className="text-center text-sm md:text-md dark:text-white">
      <p className="inline-flex">
        Designed & Built by
        <span>
          <AiFillCopyrightCircle className="m-1 text-teal-500" />
        </span>
        <span className="text-teal-500"> Afrith </span>,
      </p>
    </div>
    <div className="text-center text-sm md:text-md dark:text-white mb-3">
      <p className="inline-flex">
       All source code
        availabe at <AiOutlineGithub className="m-1 text-teal-500" />
        <a target="_blank" href="https://github.com/afrith03">
          <span className="text-teal-500">Github</span>{" "}
        </a>
      </p>
    </div>
    </div>
  );
};

export default Footer;
