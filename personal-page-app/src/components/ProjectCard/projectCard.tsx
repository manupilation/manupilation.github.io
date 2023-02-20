import React from "react";
import { Project } from "../Projects/Projects";
import githubIcon from "../../../images/githubButton.svg";
import style from "./projectCard.module.scss";


function ProjectCard(props: { project: Project }) {
  const { project } = props;
  return(
    <section className={style.cardSection}>
      <div className={style.cardContainer}>
        <h2>{project.title}</h2>
        <p>{project.details}</p>

        <div className={style.containerLinks}>
          <div>
            <a href={project.github} target="_blank"><img src={ githubIcon } alt="Github icon"/></a>
          </div>
          <h4>SAIBA MAIS</h4>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard;
