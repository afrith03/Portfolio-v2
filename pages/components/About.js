import React from "react";

function About() {
  return (
    <div className="p-2 md:p-0">
      <h3 className="text-3xl font-bold text-slate-700 py-1 dark:text-white ">
        Who am I?
      </h3>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        {/* Since the beginning of my journey as a freelance designer and
      developer, I've done remote work for
      <span className="text-teal-500"> agencies </span>
      consulted for <span className="text-teal-500">startups </span>
      and collaborated with talanted people to create digital products
      for both business and consumer use. */}
        Hi, I’m  <span className="text-teal-500"> Afrith!  </span> I'm a developer with in-depth experience in React and
        ServiceNow. I create websites that help organizations address business
        challenges and meet their needs. My expertise lies within front-end web
        apps, and the main languages in my tech stack are   <span className="text-teal-500"> JavaScript  </span>,<span className="text-teal-500"> React  </span>, and
        HTML/CSS. I’m a lifelong learner (currently taking <span className="text-teal-500">ServiceNow </span>
        Development as the primary focus!) and love to read, code, and find new
        inspiration in nature.
      </p>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I offer from a wide range of services, including brand design,
        programming and teaching.
      </p>
    </div>
  );
}

export default About;
