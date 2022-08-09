import React from 'react';
import Navbar from '../NavBar/Navbar';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1>Emanoel</h1>
      <Navbar/>
    </header>
  )
}

export default Header;
