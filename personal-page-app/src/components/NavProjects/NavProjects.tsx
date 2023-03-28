import React from 'react';
import styles from "./NavProjects.module.scss";

type NavProps = {
  active: number,
  setActive: React.Dispatch<React.SetStateAction<number>>,
  index: number
};

const NavProjects = (props: NavProps) => {
  const selected = props.active === props.index;

  return (
    <div
      className={`${styles.projectIcon} ${selected ? "activeIcon" : ""}`}
      onClick={() => props.setActive(props.index)}
     ></div>
  );
};

export default NavProjects;