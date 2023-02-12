import React from "react";
import npm from "../../public/afrith-js.png";
import Image from "next/image";
function OtherProjects({ scaleEffect }) {
  const otherProjects = [
    {
      id: 1,
      title: "Twitter Bot",
      description:
        "A Twitter bot that utilizes the Node.js platform and the OpenAI API to automate various tasks such as posting tweets every hour by generating quotes from OpenAI and providing valuable content.",
      link: "https://twitter.com/Afrith03",
      image: "/twitter.png",
      source: "https://github.com/afrith03/Twitter-bot",
    },

    {
      id: 2,
      title: "Instagram Automation",
      description:
        "a Node app that automates Posting on Instagram, such as scheduling posts. The tool will use Node server to run 24/7 and post Generated Motivational quotes every 6 hours,Thus saving time and effort.",
      link: "https://www.instagram.com/quotesbymyth/",
      image: "/instagram.png",
      source: "https://github.com/afrith03/Insta-Bot",
    },
    {
      id: 3,
      title: "Afrith.js",
      description:
        "afrith.js is a lightweight, easy-to-use npm package. It will make you console look a little colourful Check this out if you are a fan of 'Vaigai puyal'",
      link: "https://socket.dev/npm/package/afrith",
      image: "/vadivel.png",
      source: "https://www.npmjs.com/package/afrith",
    },
    {
      id: 5,
      title: "Text Utils",
      description:
        "TextUtils is a React.js application to format your text by Capitalizing and other formatting options. It provides features like word count and time takes to read the paragraph, It is an open-source application",
      link: "https://text-utils-9fb3.netlify.app/",
      image: "/text-utils2.png",
      source:"https://github.com/afrith03/text-tool"
    },
  ];
  return (
    <div>
      <h3 className="text-3xl py-1 font-bold text-slate-700 dark:text-white text-right my-10">
        Other notewothy projects.
      </h3>

      {/* carousel  */}
      <div className="carousel p-2 w-full space-x-4 bg-slate-200 dark:bg-slate-800 carousel-center  rounded-box">
        {otherProjects.map((items,index) => (
          // <div className="mockup-window border bg-base-300 h-[430px]">
          <div className="carousel-item flex-col justify-between gap-2"
          key={index}>
            <div className="card w-80 shadow-xl bg-slate-50 dark:bg-slate-700 dark:text-white">
              <figure className="px-3 pt-3">
                <img
                  src={items.image}
                  alt={items.description}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body pb-4 items-center dark:text-white text-slate-700">
                <h2 className="card-title ">{items.title}</h2>
                <p>{items.description}</p>
                <div className="card-actions mt-3 flex items-end justify-between">
                  <a href={items.link} target="_blank" rel="noreferrer">
                    <button
                      className={`cursor-none rounded-full font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 text-white shadow-xl ${scaleEffect} px-2 py-1`}
                    >
                      Have a look?
                    </button>
                  </a>
                  <a
                    href={items.source}
                    target="_blank"
                    rel="noreferrer"
                    className="link link-info hover:link-warning"
                  >
                    Source code
                  </a>
                </div>
              </div>
            </div>
          </div>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default OtherProjects;
