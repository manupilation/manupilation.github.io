import React from "react";
import Header from "../components/Header/Header";
import MainContent from "../components/Main-content/Main-content";
import Footer from "../components/Footer/Footer";
import Head from "../Head";

function HomePage() {
  return(
    <>
      {/* <Header /> */}
      <Head title="Boas vindas!"/>
      <MainContent />
      {/* <Footer /> */}
    </>
  )
}

export default HomePage;

