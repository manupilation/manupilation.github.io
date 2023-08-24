import React from "react";
import ExperienceFilter from "../components/ExperienceFilter/ExperienceFilter";
import Head from "../Head";

const Experience = () => {
  return (
    <main>
      <Head title="Meus conhecimentos" description="Entre em contato comigo! Vamos conversar um pouco sobre tecnologia :)"/>
      <ExperienceFilter />
    </main>
  );
}

export default Experience;
