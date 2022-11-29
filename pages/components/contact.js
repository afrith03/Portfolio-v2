import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"

function Contact() {
  var inputStyle =
    "m-1 p-1 rounded-lg shadow-lg text-center outline-0 outline-slate-400 border border-slate-400 hover:bg-slate-200";
  // Button hover state
  const [btnMove, setBtnMove] = useState(null);
  const [isValidForm, setisValidForm] = useState(true)
  const [firstHover, setfirstHover] = useState(false)

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
    if (isValidEmail(formInput.email) && formInput.description.length>=5 && formInput.name.length >=3) {
      setisValidForm(false) 
    }else if(firstHover){
     
      setisValidForm(true) 
    } 
    else {
      console.log("ntg")
    }
   
  
   
  }, [formInput])
  
  return (
    <section className=" my-10 w-full flex flex-col items-center justify-center text-slate-700">
      <h1 className="text-3xl py-1 font-bold dark:text-white ">Contact Me!</h1>
      <p className="w-10/12 text-sm text-center">
        I’m currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll get back to
        you!
      </p>
      <input
        type="text"
        className={inputStyle}
        name="name"
        id="name"
        placeholder="Name"
        onChange={handleChange}
      />
     { formInput.name.length <=3 && <label htmlFor="name" className="text-xs">Name sould be more than 3 characters</label>}
      <input
        type="email"
        className={inputStyle}
        pattern=""
        name="email"
        id="email"
        placeholder="Email"
        onChange={handleChange}
      />
       {!isValidEmail(formInput.email) && <label htmlFor="email" className="text-xs">Please enter a valid Email address</label>}
      <textarea
        type="textarea"
        
        className={inputStyle}
        name="description"
        id="description"
        placeholder="Description"
        onChange={handleChange}
      />
        { formInput.description.length<=5 && <label htmlFor="description" className="text-xs">Description sould be more than 5 characters</label>}
       <motion.button
          name="submit"
          id="submit"
          className={`bg-indigo-600 rounded-xl px-4 py-2        
          `}
          
         // ${btnMove ? "right-32 " : "left-32"} ease-in transition-all
          animate={{
            x:  firstHover ? isValidForm ? btnMove ? -150 : 150 : 0 :0,
            scale: 1,
            rotate: 0,
          }}
                  
          onMouseOver={() => {
            isValidForm && setBtnMove(!btnMove);
            setfirstHover(true);
          }}
          onClick={
            ()=>{
              console.log("clicked")
            }
          }
        >
          Send a mail
        </motion.button>
 
      <br />
        </section>
  );
}

export default Contact;
