import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <Link to="/exp">Experiência</Link>
        <Link to="/formacao">Formação</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </ul>
    </nav>
  )
}

export default Navbar;
