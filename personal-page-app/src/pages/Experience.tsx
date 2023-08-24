import React from "react";
import ExperienceFilter from "../components/ExperienceFilter/ExperienceFilter";
import Head from "../Head";
import ExperienceContext from "../context/experienceContext";

const Experience = () => {
  return (
    <main>
      <Head title="Meus conhecimentos" description="Entre em contato comigo! Vamos conversar um pouco sobre tecnologia :)"/>
      <ExperienceContext>
        <ExperienceFilter />
      </ExperienceContext>
    </main>
  );
}

export default Experience;
