import React from 'react'

function Contact() {
  return (
  <section className=" text-gray-600 font-mono relative">
  <div className="absolute inset-0 bg-gray-700 opacity-60">
    <iframe width="100%" height="100%" frameBorder={0} marginHeight={0} marginWidth={0} title="map" scrolling="no"src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d31091.82323669059!2d80.2122216912651!3d13.068870221370954!3m2!1i1024!2i768!4f13.1!2m1!1schennai%20map%20html!5e0!3m2!1sen!2sin!4v1668347864449!5m2!1sen!2sin" style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}} />
   
  </div>
  <div className="container  px-5 py-24 mx-auto flex">
    <div className="lg:w-2/4 md:w-2/3 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 bg-gradient-to-r from-cyan-100 text- to-blue-100 shadow-md">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact Me!</h2>
      <p className="leading-relaxed mb-5 text-gray-600">I’m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!</p>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
      </div>
      <button className="rounded-full font-mono bg-gradient-to-r from-cyan-500 text- to-teal-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white px-4 py-2">
              Lets get started!
              </button>
                <p className="text-xs text-center text-gray-500 mt-3">All rights reserved Copyright @ 2022</p>
    </div>
  </div>
</section>

  )
}

export default Contact