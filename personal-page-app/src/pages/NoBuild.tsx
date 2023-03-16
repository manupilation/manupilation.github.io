import React from "react";
import NoBuildBody from "../components/NoBuilded/NoBuildBody";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Head from "../Head";

function NoBuild() {
  return (
    <>
      {/* <Header /> */}
      <Head title="Nada encontrado"/>
      <NoBuildBody />
      {/* <Footer /> */}
    </>
  )
}

export default NoBuild;
