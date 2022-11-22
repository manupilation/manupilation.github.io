import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
const activeMenu = document.querySelectorAll('[data-menu="true"]');

function handleClick(event: React.MouseEvent<HTMLElement>) {
  event.currentTarget.nextElementSibling?.classList.toggle(styles['active']);
  event.currentTarget.classList.toggle(styles['active']);
}

function useOutsideListener(ref: React.MutableRefObject<null | HTMLDivElement>) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        activeMenu.forEach((itens) => {
          itens.classList.remove(styles['active']);
        });
      };
    };
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [ref]);
}

function renderNavBar() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideListener(wrapperRef);

  return (
    <div className={styles.navBar} ref={wrapperRef}>
      <button className={styles.menu} onClick={ handleClick } data-menu>MENU</button>
      <nav className={styles.navContainer} data-menu>
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
