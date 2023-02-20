import React from "react";
import ProjectCard from "../ProjectCard/projectCard";
import ProjectsJson from "../../data/projects.json";
import style from "./projects.module.scss";

export type Project = {
  title: string,
  details: string,
  isDeployed: boolean,
  github: string,
  seeMore: string,
}

function Projects() {
  return(
    <main className={style.projectsMain}>
      <div className={style.projectsContainer}>
        {
          ProjectsJson.map((project: Project, i) => {
            return <ProjectCard key={i} project={project}/>
        })}
      </div>
    </main>
  )
}

export default Projects;
