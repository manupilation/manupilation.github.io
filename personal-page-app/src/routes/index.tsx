import React from "react";
import { Routes, Route, HashRouter as Router } from 'react-router-dom';
import HomePage from "../pages/Home";
import NoBuildBody from "../components/NoBuilded/NoBuildBody";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function DefaultRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="*" element={ <NoBuildBody /> }/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default DefaultRoutes;
