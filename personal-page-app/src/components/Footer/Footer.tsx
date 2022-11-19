import React from "react";
import styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.emails}>
        <h3>manupilation.dev@gmail.com</h3>
        <h3>emanoelmattos13@gmail.com</h3>
      </div>
      <div className={styles.copy}>
        Todos os direitos declarados. ©
      </div>
      <nav aria-label="redes-sociais">
        <ul>
          <a
            href="https://github.com/manupilation"
            target="_blank"
            rel="external">
              <img src="../../images/iconmonstr-github-1.svg"
              alt="github icon"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/emanoel-mattos-ribeiro/"
            target="_blank"
            rel="external">
              <img src="../../images/icons8-linkedin.svg" alt="linkedin icon"/>
          </a>
          <a
            href ="mailto:manupilation.dev@gmail.com"
            target="_blank"
            rel="external">
              <img src="../../images/icons8-gmail.svg" alt="gmail icon"/>
          </a>
          <a
            href="https://www.instagram.com/manou.exe/"
            target="_blank"
            rel="external">
              <img src="../../images/icons8-instagram.svg" alt="instagram icon" />
          </a>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
