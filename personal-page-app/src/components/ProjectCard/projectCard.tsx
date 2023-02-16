import React from "react";
import { Project } from "../Projects/Projects";
import githubIcon from "../../../images/githubButton.svg";


function ProjectCard(props: { project: Project }) {
  const { project } = props;
  return(
    <section>
      <div>
        <h2>{project.title}</h2>
        <p>{project.details}</p>

        <div>
          <div>
            <button><img src={ githubIcon } alt="Github icon"/></button>
          </div>
          <h4>SAIBA MAIS</h4>
        </div>
      </div>
    </section>
  )
}

export default ProjectCard;
