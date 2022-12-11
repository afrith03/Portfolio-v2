import Head from "next/head";
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
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>

          <title>About me - Afrith Shariff</title>
          <meta
            name="description"
            content="Hi, I’m Afrith! I’m a developer with in-depth experience in React and ServiceNow. I create websites that help organizations address business challenges and meet their needs. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript , React , and HTML/CSS. I’m a lifelong learner (currently taking ServiceNow Development as the primary focus!) and love to read, code, and find new inspiration in nature.  I offer from a wide range of services, including brand design, programming and teaching."
          />
          <link rel="icon" href="/afrith-logo.png" />

          <meta property="og:title" content="About me - Afrith Shariff Y" />
          <meta property="og:type" content="profile" />
          <meta property="og:url" content="https://afrithshariff.me" />
          <meta
            property="og:image"
            content="https://afrithshariff.me/afrith-logo-bg.png"
          />
          <meta property="og:site_name" content="Afrith's Portfolio website" />
          <meta
            property="og:description"
            content="Hi, I’m Afrith! I’m a developer with in-depth experience in React and ServiceNow. I create websites that help organizations address business challenges and meet their needs. My expertise lies within front-end web apps, and the main languages in my tech stack are JavaScript , React , and HTML/CSS. I’m a lifelong learner (currently taking ServiceNow Development as the primary focus!) and love to read, code, and find new inspiration in nature.  I offer from a wide range of services, including brand design, programming and teaching."
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="Afrith,afrith, Afrith shariff,Afrith Shariff, afrith shariff y,afrith shariff me, react, servicenow, afrith, inspiration, currently, taking, development,Afrith shariff,Shariff attaya,Afrikah smith,Afreen shariff,Afr sharathon,Sharif.atkins,Harga batu akik merah delima,Sharif atkins wife,Sharif atkins er,Sharif atkins instagram"/>
        </Head>
        <FixedBtn />
        <main className="font-mono px-1 sm:px-10 overflow-hidden dark:bg-gray-900 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Blockquote />
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
          <Footer />
        </main>
      </div>
    </>
  );
}
