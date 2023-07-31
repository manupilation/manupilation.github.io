import React from "react";
import MainContent from "../components/Main-content/Main-content";
import Head from "../Head";
import SecondBody from "../components/Body/SecondBody/SecondBody";
import AlfredoContent from "../components/Body/AlfredoContent/AlfredoContent";

function HomePage() {
  return(
    <>
      {/* <Header /> */}
      <Head title="Boas vindas!"/>
      <MainContent />
      <SecondBody />
      <AlfredoContent />
      {/* <Footer /> */}
    </>
  )
}

export default HomePage;

