import React from "react";
import { motion } from "framer-motion";
function Projects({ scaleEffect }) {

  const ProjectArray = [
    {
      id: 1,
      title: "Myth's Player",
      description:
        "Myth's player is a modern, lightweight web music player that combines the flexibility of HTML, CSS, and JavaScript. also supports features such as shuffle, repeat, and more.",
      link: "https://afrith03.github.io/musicplayer/",
      image: "url(../public/music-player.png)",
    },
    {
      id: 2,
      title: "Al-Miraaj.com",
      description:
        "Almiraj.com was a great client to work with. I was able to help them create a stunning landing page that was designed to engage visitors and generate leads. the response to the landing page has been overwhelmingly positive.",
      link: "https://almiraaj.com",
      image: "url(../public/almiraaj2.png)",
    },
    // {
    //   id: 3,
    //   title: "Afrith.js",
    //   description:
    //     "afrith.js is a lightweight, easy-to-use npm package. It will make you console look a little colourful Check this out if you are a fan of 'Vaigai puyal'",
    //   link: "https://socket.dev/npm/package/afrith",
    //   image: "url(../public/afrith-js.png)",
    // },
    {
      id: 3,
      title: "News Monkey",
      description:
        "NewsMonkey is a React app that gives you real-time news from anywhere in the world. It is configured with Newsapi to fetch news. You can also customize the news feed to get the news that you want.",
      link: "https://github.com/afrith03/NewsMonkey",
      image: "url(../public/news-monkey2.png)",
    },
    {
      id: 4,
      title: "Text Utils",
      description:
        "TextUtils is a React.js application to format your text by Capitalizing and other formatting options. It provides features like word count and time takes to read the paragraph, It is an open-source application",
      link: "https://text-utils-9fb3.netlify.app/",
      image: "url(../public/text-utils2.png)",
    },
  ];
  

  return (
    // project 1
    <div className="text-slate-700 webkit">
      <h3 className="text-3xl py-1 font-bold dark:text-white text-right">
        Some Things I’ve Built.
      </h3>

      {ProjectArray.map((items) => (
        <motion.div
        key={items.id}
        // drag
        // dragConstraints={{left:5,right:5 ,top:10 , bottom:10}}
        className="relative rounded-2xl mx-2 my-4  md:mt-28 flex dark:bg-slate-700 bg-slate-50 max-w-3xl shadow-xl dark:shadow-xxl dark:shadow-slate-800">
          {/* {(items.id % 2 == 0) ? "true" :"false"} */}
         
         {/* Image */}
          <div
            className={`px-4 pt-4 rounded-2xl w-[100%] h-64 sm:h-56 md:h-72 lg:h-64 xl:h-60 blur-md bg-[${
              items.image
            }] md:bg-none ${
              items.id % 2 == 0 ? " " : "md:ml-[55%]"
            } bg-cover bg-center md:w-[45%] text-center`}
          ></div>
          {/* content */}
          <div
            className={`absolute md:w-[45%] text-center px-4 pt-4 rounded-2xl w-[100%]  ${
              items.id % 2 == 0 ? " " : "md:ml-[55%]"
            } `}
          >
            <h5 className=" font-bold text-2xl mb-3 mix-blend-multiply md:mix-blend-normal dark:md:text-slate-100">{items.title}</h5>
            <p className="text-left text-sm leading-5  text-black md:text-slate-700 mix-blend-multiply  md:mix-blend-normal dark:md:text-slate-100">{items.description}</p>
            <a href={items.link} target="_blank"  rel="noreferrer" >
              <button
                className={`cursor-none rounded-full m-3 font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 text-white shadow-xl ${scaleEffect} px-4 py-2`}
              >
                View Project
              </button>
            </a>
          </div>
          <div
            //  style={{background: items.image}}
            className={`md:w-[50%] shadow-inherit absolute bg-[${
              items.image
            }] bg-cover bg-center bg-no-repeat h-72 md:h-80 lg:h-72 ${
              items.id % 2 == 0 ? "right-6" : "left-6"
            } bottom-0 rounded-t-2xl ${scaleEffect} `}
          ></div>
        </motion.div>
      ))}
    </div>
  );
}

export default Projects;
