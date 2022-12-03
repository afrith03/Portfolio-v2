import React from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsCursor, BsInstagram } from "react-icons/bs";
import deved from "../../public/afrith.png";
import Image from "next/image";
import Link from "next/link";
function Blockquote() {
  return (
    <div className=" md:grid grid-cols-3 gap-1 px-3 md:px-0">
      <motion.div
        animate={{
          scale: 1,
        }}
        initial={{ scale: 0 }}
        className="content w-full col-span-2"
      >
        <div className="text-4xl mt-auto font-bold align-text-bottom font-mono py-2 text-teal-600 dark:text-teal-400 md:text-5xl">
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            A
          </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            f
          </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            r
          </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            i
          </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            t
          </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            h
          </span>
          <span className="text-8xl text-transparent"> </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            S
          </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            h
          </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            a
          </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            r
          </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            i
          </span>
          <span className="hover:text-7xl hover:text-teal-100 transition-all ease-in-out">
            f
          </span>
          <span className="hover:text-7xl hover:text-teal-100  transition-all ease-in-out">
            f
          </span>
        </div>

        <h3 className="text-xl py-2 dark:text-white md:text-2xl">
          <code>Front-end Engineer/ServiceNow Devloper</code>
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-l">
          {/* Building a successful product is a challenge, I am highly
                energetic techie! */}
          {/* I’m a software engineer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I’m focused on building accessible, human-centered
                products at Upstatement. */}
        </p>
        <div className="md:flex gap-3 ">
          <Link href="#contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{scale:0.9}}
              className="rounded-full font-mono bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 focus:outline-none focus:ring focus:ring-sky-300 text-white px-4 py-2 flex"
            >
              Lets get started!
              <BsCursor className="m-1" />
            </motion.button>
          </Link>
          <a
            href="https://account.servicenow.com/personal-data/11ecd280b/7ae69f488/540637b41/5ed11T2MD/resume.html"
            target="_blank"
            title="View Afrith's Profile in ServiceNow style"
          >
            <motion.button
             whileHover={{ scale: 1.1 }}
             whileTap={{rotate:360}}
            className="mt-3 md:mt-0 rounded-full font-mono bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 focus:outline-none focus:ring focus:ring-sky-300 text-white px-4 py-2 flex">
              ServiceNow
              <BsCursor className="m-1" />
            </motion.button>
          </a>
        </div>
        <div className="text-3xl flex gap-4 pt-10 text-gray-600 dark:text-gray-400">
          <motion.a
          whileHover={{rotate:360,scale:1.3}}
            href="https://github.com/afrith03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </motion.a>
          <motion.a
           whileHover={{rotate:360,scale:1.3}}
            href="https://www.linkedin.com/in/afrithshariff/"
            target="_blank"
            rel="noopener noreferrer"
          >
          
            <AiFillLinkedin />
          </motion.a>
          <motion.a
           whileHover={{rotate:360,scale:1.3}}
            href="https://www.instagram.com/afrith_03/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </motion.a>
        </div>
      </motion.div>
      <div className="mt-11 md:mt-0 bg-gradient-to-tr from-cyan-300 to-blue-600 rounded-full h-80 w-80 overflow-visible ">
        <motion.img
          animate={{
            scale: 2.4,
          }}
          initial={{ scale: 0 }}
          src="/afrith.png"
          className="relative -top-20"
          alt=""
          srcset=""
        />
        {/* <Image
        
        src={deved}
        className="w-full"
        layout="fill"
        objectFit="cover"
      /> */}
      </div>
    </div>
  );
}

export default Blockquote;
