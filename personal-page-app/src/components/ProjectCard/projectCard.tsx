import React, { FocusEvent } from "react";
import { Project } from "../Projects/Projects";
import githubIcon from "../../../images/githubButton.svg";
import style from "./projectCard.module.scss";

  function ProjectCard(props: { project: Project }) {
  const { project } = props;


  return(
    <section className={style.cardSection} aria-label="Card de projeto">
      <div className={style.cardContainer}>
        <span
          tabIndex={-1}
        > 
          {
            project.isDeployed
            ? <a
              className={style.deployed} 
              target="_blank" 
              href={project.deploy}
              tabIndex={-1}
              ></a>
            : <div className={style.notDeployed}></div>
          }
        </span>
        <h2>{project.title}</h2>
        <p>{project.details}</p>

        <div className={style.containerLinks}>
          <div tabIndex={-1}>
            <a
              href={project.github}
              target="_blank"
              tabIndex={-1}
            ><img src={ githubIcon } alt="Github icon"/></a>
          </div>
          <h4>STACK</h4>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard;
