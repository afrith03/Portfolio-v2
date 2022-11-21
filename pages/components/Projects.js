import React from "react";
import { ProjectArray } from "./projectsJson";

function Projects({ scaleEffect }) {
  return (
    // project 1
    <div className="text-slate-700">
    
     <h3 className="text-3xl py-1 font-bold dark:text-white text-right">Some Things I’ve Built.</h3>

     {ProjectArray.map((items) => (

         <div className="relative rounded-2xl mt-28  m-auto flex bg-slate-50 max-w-3xl shadow-xl">
           {/* {(items.id % 2 == 0) ? "true" :"false"} */}
         <div className={`px-4 pt-4 rounded-2xl w-[100%] bg-[${items.image}] md:bg-none ${(items.id % 2 == 0) ? " " :"md:ml-[55%]"} bg-cover md:w-[45%] text-center`}>
           <h5 className=" font-bold text-2xl mb-3">{items.title}</h5>
           <p className="text-left text-sm leading-5">
            {items.description}
           </p>
           <a href={items.link} target="_blank">
             <button
               className={`cursor-none rounded-full m-3 font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 text-white shadow-xl ${scaleEffect} px-4 py-2`}
             >
               View Project
             </button>
           </a>
         </div>
         <div
        //  style={{background: items.image}}
           className={`md:w-[50%] shadow-inherit absolute bg-[${items.image}] bg-cover bg-center bg-no-repeat h-64 ${(items.id % 2== 0) ? "right-6" :"left-6"} bottom-0 rounded-t-2xl ${scaleEffect} `}
         ></div>
       </div>

      ))}
    </div>
  );
}

export default Projects;
