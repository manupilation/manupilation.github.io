import React from "react";
import styles from './styles.module.scss';
import insta from '../../../images/instagram.svg';
import linkedin from '../../../images/linkedin.svg';
import gmail from '../../../images/gmail.svg';
import github from '../../../images/github.svg';

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
              <img src={github}
              alt="github icon"/>
          </a>
          <a 
            href="https://www.linkedin.com/in/emanoel-mattos-ribeiro/"
            target="_blank"
            rel="external">
              <img src={linkedin} alt="linkedin icon"/>
          </a>
          <a
            href ="mailto:manupilation.dev@gmail.com"
            target="_blank"
            rel="external">
              <img src={gmail} alt="gmail icon"/>
          </a>
          <a
            href="https://www.instagram.com/manou.exe/"
            target="_blank"
            rel="external">
              <img src={insta} alt="instagram icon" />
          </a>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer;
