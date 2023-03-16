import React, { useContext, useEffect, useRef, useState } from "react";
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
  deploy: string,
}

function Projects() {
  const {
    active,
    setActive,
    position,
    setPosition,
  } = useContext(slideContext);

  const contentRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active])


  function slideNext() {
    if (active < ProjectsJson.length - 1) setActive(active + 1);
  }

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  return(
    <main className={style.container + " animaRight"}>
      <div
        className={style.content}
        style={{
          transform: `translateX(${position}px)`,
        }}
        ref={contentRef}
      >
        {
          ProjectsJson.map((project: Project, i) => {
            return <ProjectCard key={i} project={project}/>
        })}
      </div>
      <div className={style.slideButtons}>
        <button onClick={slidePrev} disabled={active === 0}>ANTERIOR</button>
        <button onClick={slideNext} disabled={active === ProjectsJson.length -1 }>PRÓXIMO</button>
      </div>
    </main>
  )
}

export default Projects;
