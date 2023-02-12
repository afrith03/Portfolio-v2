import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
function Projects({ scaleEffect }) {
  const ProjectArray = [
    {
      id: 1,
      title: "Dyootify",
      description:
        "Dyootify is a multiplatform mobile app music player built with capacitor js. It offers wide of music from various Languages to listen and Hey! it free to use just install the android app or just use the web version",
      link: "https://dyootify.netlify.app",
      image: "/dyootify.png",
    },

    {
      id: 2,
      title: "Al-Miraaj.com",
      description:
        "Almiraj.com was a great client to work with. I was able to help them create a stunning landing page that was designed to engage visitors and generate leads. the response to the landing page has been overwhelmingly positive.",
      link: "https://almiraaj.com",
      image: "/almiraaj2.png",
    },
    {
      id: 3,
      title: "Myth's Player",
      description:
        "Myth's player is a modern, lightweight web music player that combines the flexibility of HTML, CSS, and JavaScript. also supports features such as shuffle, repeat, and more.",
      link: "https://afrith03.github.io/musicplayer/",
      image: "/music-player.png",
    },
    // {
    //   id: 3,
    //   title: "Afrith.js",
    //   description:
    //     "afrith.js is a lightweight, easy-to-use npm package. It will make you console look a little colourful Check this out if you are a fan of 'Vaigai puyal'",
    //   link: "https://socket.dev/npm/package/afrith",
    //   image: "url(/afrith-js.png)",
    // },
    {
      id: 4,
      title: "News Monkey",
      description:
        "NewsMonkey is a React app that gives you real-time news from anywhere in the world. It is configured with Newsapi to fetch news. You can also customize the news feed to get the news that you want.",
      link: "https://github.com/afrith03/NewsMonkey",
      image: "/news-monkey2.png",
    },
  ];

  return (
    // project 1
    <div className="text-slate-700 webkit">
      <h3 className="text-3xl py-1 font-bold dark:text-white text-right">
        Some Things I’ve Built.
      </h3>

      <div className="hidden md:block">
        {ProjectArray.map((items) => (
          <motion.div
            key={items.id}
            // drag
            // dragConstraints={{left:5,right:5 ,top:10 , bottom:10}}
            className="relative rounded-2xl mx-2 my-4  md:mt-28 flex dark:bg-slate-700 bg-slate-50 max-w-3xl shadow-xl dark:shadow-xxl dark:shadow-slate-800"
          >
            {/* {(items.id % 2 == 0) ? "true" :"false"} */}
            {/* content */}
            <div
              className={` md:w-[45%] text-center px-4 pt-4 rounded-2xl   ${
                items.id % 2 == 0 ? " " : "md:ml-[55%]"
              } `}
            >
              <h5 className=" font-bold text-2xl mb-3 mix-blend-multiply md:mix-blend-normal dark:md:text-slate-100">
                {items.title}
              </h5>
              <p className="text-left text-sm leading-5  text-black md:text-slate-700 mix-blend-multiply  md:mix-blend-normal dark:md:text-slate-100">
                {items.description}
              </p>
              <a href={items.link} target="_blank" rel="noreferrer">
                <button
                  className={`cursor-none rounded-full m-3 font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 text-white shadow-xl ${scaleEffect} px-4 py-2`}
                >
                  View Project
                </button>
              </a>
            </div>
            <img
              src={items.image}
              //  style={{background: items.image}}
              className={`md:w-[50%] shadow-inherit absolute h-72 md:h-80 lg:h-72 ${
                items.id % 2 == 0 ? "right-6" : "left-6"
              } bottom-0 rounded-t-2xl ${scaleEffect} `}
            ></img>
          </motion.div>
        ))}
      </div>
      {/* Mobile view  */}
      <div className="md:hidden block">
        {ProjectArray.map((itemsMob) => (
          <motion.div
            key={itemsMob.id}
            className="card sm:w-96 bg-base-800 shadow-xl image-full mt-4"
          >
            <figure>
              <img src={itemsMob.image} alt={itemsMob.description} />
            </figure>
            <div className="card-body">
              <h1 className="card-title text-2xl">{itemsMob.title}</h1>
              <p>{itemsMob.description}</p>
              <div className="card-actions justify-end">
                <a href={itemsMob.link} target="_blank" rel="noreferrer">
                  <button
                    className={`cursor-none rounded-full mt-2 font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 text-white shadow-xl ${scaleEffect} px-4 py-2`}
                  >
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
