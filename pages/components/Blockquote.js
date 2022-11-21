import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";
  import {BsCursor} from "react-icons/bs";
  import deved from "../../public/afrith.png";
import Image from "next/image";

function Blockquote() {
  return (
    <div className=" md:flex gap-8 py-10">
            <div className="content justify-between">
              <div className="text-4xl mt-auto font-bold align-text-bottom font-mono py-2 text-teal-600 dark:text-teal-400 md:text-5xl">
            
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  A
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  f
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  r
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  i
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  t
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  h
                </span>
                <span className="text-8xl text-transparent">
                {" "}
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  S
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  h
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  a
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  r
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  i
                </span>
                <span className="hover:text-7xl hover:text-teal-800 transition-all ease-in-out">
                  f
                </span>
                <span className="hover:text-7xl hover:text-teal-800  transition-all ease-in-out">
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
              <div className="flex gap-2">
                <button className="rounded-full font-mono bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 focus:outline-none focus:ring focus:ring-violet-300 text-white px-4 py-2 flex">
                  Lets get started!
                  <BsCursor className="m-1" />
                </button>

                <button className="rounded-full font-mono bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 focus:outline-none focus:ring focus:ring-violet-300 text-white px-4 py-2 flex">
                  ServiceNow
                  <BsCursor className="m-1" />
                </button>
              </div>
              <div className="text-3xl flex gap-4 pt-10 text-gray-600 dark:text-gray-400">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
              </div>
            </div>
            <div className="mx-auto bg-gradient-to-tr from-cyan-300 to-blue-600 rounded-full w-80 h-80 relative overflow-x-hidden md:h-90 md:w-90">
              <Image
                src={deved}
                // className="absolute w-96"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
  )
}

export default Blockquote