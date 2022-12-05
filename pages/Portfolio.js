import Head  from "next/head";
import { useState } from "react";

import Projects from "./components/Projects";
import Contact from "./components/contact";
import About from "./components/About";
import Blockquote from "./components/Blockquote";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import FixedBtn from "./components/fixedbtn";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  var scaleEffect = "hover:scale-x-105 transition-all ease-in-out";
  return (
    <>
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>About me - Afrith Shariff</title>
        <meta name="description" content="Portfoloi website" />
        <link rel="icon" href="/logo-2.png" />
      </Head>
      <FixedBtn/>
      <main className="font-mono px-1 sm:px-10 overflow-hidden dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
         <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
         <Blockquote/>
        </section>
        {/* Quote section  */}

        <section>
          <div
            className={
              darkMode
                ? "rounded-2xl shadow-md"
                : "rounded-2xl bg-white shadow-lg"
            }
          >
            {/* <div className="text-center text-gray-800 p-7">
              <p className="text-md text-gray-800 dark:text-gray-200">
                Spiders are the only web developers who love finding bugs.
              </p>
              <p className="text-md text-right mr-20 text-gray-800 dark:text-gray-200">
                -Anonymous
              </p>
            </div> */}
          </div>
        </section>

        <section className="py-10">
          <About />
        </section>

        <Projects scaleEffect={scaleEffect} />
    
        <Contact scaleEffect={scaleEffect} />
        <Footer/>
      </main>
    </div>
   
      
    
    </>
  );
}
