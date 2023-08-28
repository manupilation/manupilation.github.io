import React from "react";
import ExperienceFilter from "../components/ExperienceFilter/ExperienceFilter";
import Head from "../Head";
import ExperienceContext from "../context/experienceContext";
import ExpList from "../components/ExpList/ExpList";

const Experience = () => {
  return (
    <main>
      <Head title="Meus conhecimentos" description="Entre em contato comigo! Vamos conversar um pouco sobre tecnologia :)"/>
      <ExperienceContext>
        <ExperienceFilter />
        <ExpList />
      </ExperienceContext>
    </main>
  );
}

export default Experience;
