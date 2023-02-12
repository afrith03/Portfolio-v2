import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  <Head>
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
  <meta property="og:url" content="https://afrith.me" />
  <meta
    property="og:image"
    content="https://afrith.me/afrith-logo-bg.png"
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
  return <Component {...pageProps} />
}

export default MyApp
