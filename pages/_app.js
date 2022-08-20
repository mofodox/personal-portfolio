import '../styles/globals.scss'
import SEO from "../components/seo/SEO";
import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Nav />

          <Component {...pageProps} />

          <Footer />
      </>
  )
}

export default MyApp
