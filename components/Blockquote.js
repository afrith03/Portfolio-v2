import React from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsCursor, BsInstagram } from "react-icons/bs";
import deved from "../public/afrith-cropped-2.png";
import Image from "next/image";
import Link from "next/link";
function Blockquote() {
  var bgEffect = "transition-all duration-500 bg-gradient-to-t to-cyan-300 via-blue-300 from-blue-400 bg-size-200 bg-pos-0 hover:bg-pos-100"
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
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            A
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            f
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            r
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            i
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            t
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            h
          </span>
          <span className="text-8xl text-transparent"> </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            S
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            h
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            a
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            r
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            i
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100 transition-all ease-in-out">
            f
          </span>
          <span className="hover:text-7xl hover:text-black dark:hover:text-teal-100  transition-all ease-in-out">
            f
          </span>
        </div>

        <h3 className="text-xl text-gray-700 dark:text-gray-100 md:text-2xl mb-3">
          <code>Front-end Engineer/ServiceNow Developer</code>
        </h3>
        <p className="text-md leading-8 text-gray-600 dark:text-gray-200 my-3">
        I build things for the web.

        </p>
        <div className="md:flex gap-3 z-50">
          <Link href="#contact" scroll={true} replace>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full hov font-mono bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 focus:outline-none focus:ring focus:ring-sky-300 text-white px-4 py-2 flex"
            >
              Lets get started!
              <BsCursor className="m-1" />
            </motion.button>
          </Link>
          <a
           // href="https://account.servicenow.com/personal-data/11ecd280b/7ae69f488/540637b41/5ed11T2MD/resume.html"
           href="https://www.servicenow.com/community/user/viewprofilepage/user-id/276492"
            target="_blank"  rel="noreferrer" 
            title="View Afrith's Profile in ServiceNow style"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ 
                scale: 0.8
                // rotate: 360,

              
              }}
              className="mt-3 md:mt-0 rounded-full font-mono bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 focus:outline-none focus:ring focus:ring-sky-300 text-white px-4 py-2 flex"
            >
              ServiceNow
              <BsCursor className="m-1" />
            </motion.button>
           
          </a>
        </div>
        <div className="text-3xl flex gap-4 pt-10 text-gray-600 dark:text-gray-400">
          <motion.a
            whileHover={{ rotate: 360, scale: 1.3 }}
            className="z-50"
            href="https://github.com/afrith03"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <AiOutlineGithub />
          </motion.a>
          <motion.a
            whileHover={{ rotate: 360, scale: 1.3 }}
            className="z-50"
            href="https://www.linkedin.com/in/afrithshariff/"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ rotate: 360, scale: 1.3 }}
            className="z-50"
            href="https://www.instagram.com/afrith_03/"
            target="_blank"  
            rel="noopener noreferrer"
          >
            <BsInstagram />
          </motion.a>
        </div>
      </motion.div>
      <motion.div
      
        animate={{
          scale: 1,
          rotate:0
        }}
        
        whileHover={{
           scale:1.05,
           rotate:2
        }}
        initial={{ scale: 0, 
        rotate:65}}
        className={`mt-11 md:mt-0 ${bgEffect} rounded-full h-80 w-80 overflow-visible`}
      >
        {/* <motion.img
          animate={{
            scale: 1.1,
          }}
          initial={{ scale: 0 }}
          loading="lazy"
          src="/afrith-cropped.png"
          className="relative afrith"
        /> */}
        <Image
        
        src={deved}
        className="relative afrith"
        placeholder="blur"
        alt="Picture of the afrith (developer)"
        priority
      />
      </motion.div>
    </div>
  );
}

export default Blockquote;
