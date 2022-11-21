import React from 'react'

function About() {
  return (
    <div>
    <h3 className="text-3xl font-bold text-slate-700 py-1 dark:text-white ">Who am I?</h3>
    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
      Since the beginning of my journey as a freelance designer and
      developer, I've done remote work for
      <span className="text-teal-500"> agencies </span>
      consulted for <span className="text-teal-500">startups </span>
      and collaborated with talanted people to create digital products
      for both business and consumer use.
    </p>
    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
      I offer from a wide range of services, including brand design,
      programming and teaching.
    </p>
  </div>
  )
}

export default About