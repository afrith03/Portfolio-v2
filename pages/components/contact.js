import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Contact({ scaleEffect }) {
  // var inputStyle =
  //   "m-1 p-1 rounded-lg shadow-lg text-center outline-0 outline-slate-400 border border-slate-400 hover:bg-slate-200";
  
  const inputStyleSuccess ="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
  const inputStyleError ="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
  const inputStyleNormal ="bg-slate-50 border border-slate-500 text-slate-900 placeholder-slate-700 text-sm rounded-lg focus:ring-slate-500 dark:bg-gray-700 focus:border-slate-500 block w-full p-2.5 dark:text-slate-500 dark:placeholder-slate-500 dark:border-slate-500"
  
  // Button hover state
  const [btnMove, setBtnMove] = useState(null);
  const [isValidForm, setisValidForm] = useState(true);
  const [firstHover, setfirstHover] = useState(false);

  //change handler for inputs
  const [formInput, setformInput] = useState({
    name: "",
    email: "",
    description: "",
  });

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  //onchange for form
  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setformInput({
      ...formInput,
      [evt.target.name]: value,
    });

    console.log(formInput);
  }

  useEffect(() => {
    if (
      isValidEmail(formInput.email) &&
      formInput.description.length >= 5 &&
      formInput.name.length >= 3
    ) {
      setisValidForm(false);
    } else if (firstHover) {
      setisValidForm(true);
    } else {
      console.log("ntg");
    }
    // setfirstHover(true)
  }, [formInput]);

  return (
    <>
    <div className="">
    <h1 className="text-3xl py-1 font-bold dark:text-white ">Contact Me!</h1>
      <p translate="yes" className="w-10/12 text-sm text-center my-5 dark:text-white">
        I’m currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll get back to
        you!
      </p>
    </div>
    <div
      id="contact"
      className="my-10 mx-auto w-1/3 flex flex-col items-center justify-center text-slate-700"
    >
      
      <input
        type="text"
        className={firstHover? formInput.name.length <= 3 ? inputStyleError : inputStyleSuccess: inputStyleNormal}
        name="name"
        id="name"
        placeholder="Don't be shy, What's your name?"
        onChange={handleChange}
      />
      <motion.label
        htmlFor="name"
        animate={{
          scale: firstHover ? (formInput.name.length <= 3 ? 1: 0) : 0,
        }}
        className="text-sm text-red-600 dark:text-red-500"
      >
        Name sould be more than 3 characters
      </motion.label>

      <input
        type="email"
        className={firstHover? !isValidEmail(formInput.email) ? inputStyleError : inputStyleSuccess: inputStyleNormal}
        pattern=""
        name="email"
        id="email"
        placeholder="youremailaddress@here.please"
        onChange={handleChange}
      />

      <motion.label
        htmlFor="email"
        animate={{
          scale: firstHover ? (!isValidEmail(formInput.email) ? 1 : 0) : 0,
        }}
        className="text-sm text-red-600 dark:text-red-500"
      >
        Please enter a valid Email address
      </motion.label>

      <textarea
        type="textarea"
        className={firstHover ? formInput.description.length < 5 ? inputStyleError : inputStyleSuccess: inputStyleNormal}
        name="description"
        id="description"
        placeholder="What's in your mind?"
        onChange={handleChange}
      />

      <motion.label
        htmlFor="description"
        animate={{
          scale: firstHover ? (formInput.description.length < 5 ? 1 : 0) : 0,
        }}
        className="text-sm text-red-600 dark:text-red-500"
      >
         <span className="font-medium">Oh, snapp!</span> Say something sweet.
      </motion.label>

      {/* <div>
        <div className="mb-6">
          <label
            htmlFor="success"
            className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Your name
          </label>
          <input
            type="text"
            id="success"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Success input"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Well done!</span> Some success
            messsage.
          </p>
        </div>
        <div>
          <label
            htmlFor="error"
            className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          >
            Your name
          </label>
          <input
            type="text"
            id="error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            placeholder="Error input"
          />
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">Oh, snapp!</span> Some error message.
          </p>
        </div>
      </div> */}

      <motion.button
        name="submit"
        id="submit"
        className={`cursor-none rounded-full m-3 bg-gradient-to-r from-cyan-500 text- to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500 text-white shadow-xl px-4 py-2 
        ${firstHover ? "" : "animate-[wiggle_0.5s_ease-in-out_infinite]"}  
          `}
        // ${btnMove ? "right-32 " : "left-32"} ease-in transition-all
        animate={{
          x: firstHover ? (isValidForm ? (btnMove ? -150 : 150) : 0) : 0,
          scale: 1,
          rotate: firstHover ? 360 : 0,
        }}
        initial={{ scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onMouseOver={() => {
          isValidForm && setBtnMove(!btnMove);
          setfirstHover(true);
        }}
        onClick={() => {
          isValidForm && setBtnMove(!btnMove);
          setfirstHover(true);
          console.log("clicked");
        }}
      >
        {firstHover ? "Send a mail" : "Try me!"}
      </motion.button>

      <br />
    </div>
    </>);
}

export default Contact;
