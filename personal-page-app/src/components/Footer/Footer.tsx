import React from "react";
import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <nav aria-label="redes-sociais">
        <ul>
          <a
            href="https://github.com/manupilation"
            target="_blank"
            rel="external">
              <img src="/public/iconmonstr-github-1.svg"
              alt="github icon"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/emanoel-mattos-ribeiro/"
            target="_blank"
            rel="external">
              <img src="/public/icons8-linkedin.svg" alt="linkedin icon"/>
          </a>
          <a
            href ="mailto:manupilation.dev@gmail.com"
            target="_blank"
            rel="external">
              <img src="icons8-gmail.svg" alt="gmail icon"/>
          </a>
          <a
            href="https://www.instagram.com/manou.exe/"
            target="_blank"
            rel="external">
              <img src="/public/icons8-instagram.svg" alt="instagram icon" />
          </a>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
