import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';

function renderNavBar() {
  const [isActive, setIsActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null!)

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setIsActive(!isActive);
  }

  useEffect(() => {
    function clickOutside(event: MouseEvent) {
      const menu = event.target as Node;
      
      if(!menuRef.current.contains(menu)) {
        setIsActive(false)
      }
    }

    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    }
  });

  return (
    <div className={styles.navBar} ref={menuRef}>
      <button 
        className={`${styles.menu} ${isActive ? "active" : ""}`}
        onClick={ handleClick }
      >
        MENU
      </button>
      <nav className={`${styles.navContainer} ${isActive ? "active" : ""}  animaDown`}>
        <ul className={styles.navList}>
          <NavLink to="/exp">Experiência</NavLink>
          <NavLink to="/formacao">Formação</NavLink>
          <NavLink to="/projects">Projetos</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </ul>
      </nav>
    </div>
  );
}

function Navbar() {
  return (
    <>
    { renderNavBar() }
    </>
  );
}

export default Navbar;
