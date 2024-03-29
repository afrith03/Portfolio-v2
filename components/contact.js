import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import styles from "../styles/contact.module.css";
import Filter from "bad-words";

var filter = new Filter({ placeHolder: "x" });
filter.addWords(
  "lavade",
  "boobs",
  "ommala",
  "gotha",
  "punda",
  "otha",
  "sunni",
  "soothu",
  "pundamavan",
  "badu",
  "kunji",
  "racistmotherfucker",
  "motherfucker",
  "mothafucka",
  "sucker",
  "OMMALA"
);

function Contact({ scaleEffect }) {
  const inputStyleSuccess =
    "bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500";
  const inputStyleError =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
  const inputStyleNormal =
    "bg-slate-50 border border-slate-500 text-slate-900 placeholder-slate-700 text-sm rounded-lg focus:ring-slate-500 dark:bg-gray-700 focus:border-slate-500 block w-full p-2.5 dark:text-slate-500 dark:placeholder-slate-500 dark:border-slate-500";

  // Button hover state
  const [btnMove, setBtnMove] = useState(null);
  const [isValidForm, setisValidForm] = useState(true);
  const [firstHover, setfirstHover] = useState(false);

  //after mail button getting clicked
  const [loading, setloading] = useState(false);
  const [isMailSentSuccess, setisMailSentSuccess] = useState(null);
  const [mailSentCount, setmailSentCount] = useState(0);
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
    filter.clean("some hells word!");

    setformInput({
      ...formInput,
      [evt.target.name]:
        value.trim().length === 0 ? value : filter.clean(value),
    });

    setfirstHover(true);
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
  }, [formInput, firstHover]);

  return (
    <>
      <div className="mt-28 dark:text-white text-slate-700">
        <h1 className="text-3xl py-1 font-bold  ">
          Contact Me!
        </h1>
        <p
          translate="yes"
          className="w-10/12 text-sm m-auto text-center my-5 dark:text-white"
        >
          Want to collabrate or have any questions? my inbox is always open.
          Whether you just want to say hi, I’ll get back to you!
        </p>
      </div>
      <div
        id="contact"
        className="my-10 mx-auto w-3/4 md:w-1/3 flex flex-col items-center justify-center text-slate-700"
      >
        <input
          type="text"
          className={
            firstHover
              ? formInput.name.length <= 3
                ? inputStyleError
                : inputStyleSuccess
              : inputStyleNormal
          }
          name="name"
          id="name"
          value={formInput.name}
          placeholder="What's your name?"
          onChange={handleChange}
        />
        <motion.label
          htmlFor="name"
          animate={{
            scale: firstHover ? (formInput.name.length <= 3 ? 1 : 0.9) : 0,
          }}
          className={
            formInput.name.length <= 3
              ? "text-sm text-red-600 dark:text-red-500"
              : "text-sm text-green-600 dark:text-green-500"
          }
        >
          {formInput.name.length <= 3
            ? "uh oh! try more than 3 letters "
            : "Nice name!"}
        </motion.label>

        <input
          type="email"
          className={
            firstHover
              ? !isValidEmail(formInput.email)
                ? inputStyleError
                : inputStyleSuccess
              : inputStyleNormal
          }
          pattern=""
          name="email"
          id="email"
          value={formInput.email}
          placeholder="youremailaddress@here.please"
          onChange={handleChange}
        />

        <motion.label
          htmlFor="email"
          animate={{
            scale: firstHover ? (!isValidEmail(formInput.email) ? 1 : 0.9) : 0,
          }}
          className={
            !isValidEmail(formInput.email)
              ? "text-sm text-red-600 dark:text-red-500"
              : "text-sm text-green-600 dark:text-green-500"
          }
        >
          {!isValidEmail(formInput.email)
            ? "oh oh oh.. Email should be valid."
            : "Great! lets get in touch"}
        </motion.label>

        <textarea
          type="textarea"
          className={
            firstHover
              ? formInput.description.length < 5
                ? inputStyleError
                : inputStyleSuccess
              : inputStyleNormal
          }
          name="description"
          value={formInput.description}
          id="description"
          placeholder="What's in your mind?"
          onChange={handleChange}
        />

        <motion.label
          htmlFor="description"
          animate={{
            scale: firstHover
              ? formInput.description.length < 5
                ? 1
                : 0.9
              : 0,
          }}
          className={
            formInput.description.length < 5
              ? "text-sm text-red-600 dark:text-red-500"
              : "text-sm text-green-600 dark:text-green-500"
          }
        >
          {formInput.description.length < 5
            ? "Oh, snapp! Say something sweet."
            : "I'm excited to meet you!"}
        </motion.label>

        <motion.button
          //  disabled={mailSentCount >= 2}
          name="submit"
          id="submit"
          className={`hov rounded-full m-3  ${
            mailSentCount >= 2
              ? "bg-gradient-to-r from-slate-500 to-slate-400 hover:bg-gradient-to-r hover:from-slate-400 hover:to-slate-500"
              : "bg-gradient-to-r from-cyan-500 to-teal-500 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-500"
          }  text-white shadow-xl  dark:shadow-lg dark:shadow-black  px-4 py-2 
        ${firstHover ? "" : "animate-[wiggle_0.5s_ease-in-out_infinite]"}  
      `}
          // ${btnMove ? "right-32 " : "left-32"} ease-in transition-all
          animate={{
            x: firstHover ? (isValidForm ? (btnMove ? -140 : 140) : 0) : 0,
            scale: loading ? 0 : 1,
            rotate: firstHover ? 360 : 0,
          }}
          // whileHover={{
          //   scale: 1.1
          // }}
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
            if (isValidForm || mailSentCount >= 2) {
              setBtnMove(!btnMove);
            } else {
              setloading(true);
              axios
                .post("/api/mail", formInput)
                .then(function (response) {
                  console.log(response);
                  setTimeout(() => {
                    setloading(false);
                    setisMailSentSuccess(true);
                    setmailSentCount(mailSentCount + 1);
                  }, 2500);
                })
                .catch(function (error) {
                  console.log(error);
                  setisMailSentSuccess(false);
                  setloading(false);
                });
            }
            setfirstHover(true);
          }}
        >
          {firstHover
            ? isMailSentSuccess
              ? mailSentCount >= 2
                ? "uh oh! you've clicked a lot!"
                : "Success! wanna send again?"
              : isMailSentSuccess == null
              ? "Send mail!"
              : "Oh snap! something is wrong,"
            : "Try me!"}
        </motion.button>

        {/* Spinner  */}
        <div className="-m-4">
          <motion.div
            animate={{
              scale: loading ? 1 : 0,
            }}
            initial={{ scale: 0 }}
            className={styles.spinner}
          ></motion.div>
        </div>
        <motion.label
          animate={{
            scale: isValidForm ? 0 : loading ? 0 : isMailSentSuccess ? 1 : 0.9,
          }}
          initial={{ scale: 0 }}
          className={
            isMailSentSuccess
              ? "text-sm text-green-600 dark:text-green-500"
              : "text-sm text-red-600 dark:text-red-500"
          }
          htmlFor="submit"
        >
          {isMailSentSuccess == null
            ? ""
            : isMailSentSuccess
            ? " Please check you inbox!"
            : "We've got an error! probably internet issue."}
        </motion.label>
        {/* Spinner  */}
        <br />
      </div>
    </>
  );
}

export default Contact;
