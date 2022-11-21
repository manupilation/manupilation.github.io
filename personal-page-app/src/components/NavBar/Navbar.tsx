import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

function handleClick(event: React.MouseEvent<HTMLElement>) {
  event.currentTarget.nextElementSibling?.classList.toggle(styles['active']);
  event.currentTarget.classList.toggle(styles['active']);
}

function renderNavBar() {
  return (
    <div className={styles.navBar}>
      <button className={styles.menu} onClick={ handleClick }>MENU</button>
      <nav className={styles.navContainer}>
        <ul className={styles.navList}>
          <Link to="/exp">Experiência</Link>
          <Link to="/formacao">Formação</Link>
          <Link to="/projects">Projetos</Link>
          <Link to="/contact">Contato</Link>
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
