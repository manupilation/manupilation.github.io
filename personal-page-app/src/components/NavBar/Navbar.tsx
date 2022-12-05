import React, { useRef, useEffect, useState, useCallback, RefObject } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

const useOutsideListener = (): [
  RefObject<HTMLDivElement>,
  (node: HTMLDivElement) => void
] => {
  const ref = useRef<HTMLDivElement | null>(null);

  const setRef = useCallback((node: HTMLDivElement) => {
    ref.current = node;
  }, [ref.current]);

  return [ref, setRef]
}

function renderNavBar() {
  const [isActive, setIsActive] = useState(false)
  const [ref, setRef] = useOutsideListener();

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    event.currentTarget.nextElementSibling?.classList.toggle(styles['active']);
    setIsActive(!isActive)
  }

  useEffect(() => {
    if(ref.current?.attributes[1].value === 'true') {
      
      document.body.addEventListener('touchstart', function handleOutside(event) {
        setTimeout(() => {
          const menuButton = (event.target as HTMLElement).parentElement;
          if(menuButton !== ref.current) {
            ref.current?.querySelector('nav')?.classList.remove(styles['active']);
            document.body.removeEventListener('touchstart', handleOutside);
        }}, 75);
      });
    };
    
  }, [ref.current?.attributes[1].value]);

  return (
    <div className={styles.navBar} ref={ref} data-isactive={ isActive.toString() }>
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
