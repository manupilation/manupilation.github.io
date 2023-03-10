import React, { useContext, useState } from "react";
import ProjectCard from "../ProjectCard/projectCard";
import ProjectsJson from "../../data/projects.json";
import style from "./projects.module.scss";
import { slideContext } from "../../context/slideContext";

export type Project = {
  title: string,
  details: string,
  isDeployed: boolean,
  github: string,
  seeMore: string,
}

function Projects() {
  const { active, setActive } = useContext(slideContext);
  const [styleContent, setStyleContent] = useState({
    transform: "translateX(0)",
    boxShadow: 0,
  });

  return(
    <main className={style.container}>
      <div className={style.wrapper}>
        <div
          className={style.content}
          style={{transform: "translateX(0)"}}
        >
          {
            ProjectsJson.map((project: Project, i) => {
              return <ProjectCard key={i} project={project}/>
          })}
        </div>

      </div>
      <div className={style.slideButtons}>
        <button>ANTERIOR</button>
        <button>PRÓXIMO</button>
      </div>
    </main>
  )
}

export default Projects;
