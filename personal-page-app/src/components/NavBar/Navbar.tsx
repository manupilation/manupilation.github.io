import React from 'react';
import styles from './styles.module.scss';

function Navbar() {
  return (
    <nav>
      <ul className={styles.navList}>
        <a href="">Experiência</a>
        <a href="">Formação</a>
        <a href="">Projetos</a>
        <a href="">Contato</a>
      </ul>
    </nav>
  )
}

export default Navbar;
