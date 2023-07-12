import React from "react";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from "../pages/Home";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectsPage from "../pages/Projects";
import NoBuild from "../pages/NoBuild";
import Contact from "../pages/Contact";

function DefaultRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage /> }/>
        <Route path="/projects" element={ <ProjectsPage /> }/>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={ <NoBuild /> }/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default DefaultRoutes;
