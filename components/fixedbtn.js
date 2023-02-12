import React from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
function FixedBtn() {
  return (
     <motion.div
     initial={{rotate:90}}
      whileHover={{ scaleY: 1.05}}
      className="fixed bottom-40 hidden xl:block z-50 right-0 font-mono hover:text-teal-500 dark:hover:text-teal-500 dark:text-slate-100"
    >
    <div className="flex">
    <a href="mailto:afrithshariff123@gmail.com">  afrithshariff123@gmail.com </a>
   {/* <a href=""><BsWhatsapp className="m-1 -rotate-90 text-xl"/></a>  */}
    </div>
    <div className="bg-black
    ">

    </div>
    </motion.div>
  );
}

export default FixedBtn;
