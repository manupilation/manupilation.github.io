import React from "react";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";
import SlideContext from "../context/slideContext";
import Head from "../Head";

function ProjectsPage() {
  return(
    <>
      <Head title="Meus projetos" description="Aqui estão alguns dos meus projetos desenvolvidos."/>
      <SlideContext >
        <Projects />
      </SlideContext>
    </>
  )
}

export default ProjectsPage;

