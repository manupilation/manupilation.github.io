import React from "react";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import SlideContext from "../context/slideContext";

function ProjectsPage() {
  return(
    <>
      <SlideContext >
        <Projects />
      </SlideContext>
    </>
  )
}

export default ProjectsPage;

