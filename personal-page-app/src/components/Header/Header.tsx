import React from 'react';
import Navbar from '../NavBar/Navbar';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link to="/">Emanoel</Link>
      <Navbar/>
    </header>
  );
};

export default Header;
