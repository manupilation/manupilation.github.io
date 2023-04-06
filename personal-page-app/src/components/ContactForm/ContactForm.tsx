import React from 'react';
import styles from "./ContactForm.module.scss";
import ManuImage from "../../../images/Manur.jpg";
import {ReactComponent as Download} from '../../../images/download.svg';
import ContactFormInputs from './ContactFormInputs';
import AsideContact from './AsideContact';

const ContactForm = () => {
  return (
    <section className={styles.contactContainer  + " animaRight"}>
      <article className={styles.presentationContainer}>
        <div className={styles.imageContainer}>
          <img src={ManuImage} alt="Imagem do Manu. Atrás dele, uma cerca viva."/>
        </div>
        <a className={styles.downloadCV} href='/CurriculoManu.pdf' download="CV-Manu.pdf">
          <Download />
          <p>CV</p>
        </a>
      </article>
      
      <div className={styles.contactInputAside}>
        <h3>Entre em contato:</h3>
        <ContactFormInputs />
        <span className={styles.separator}></span>
        <AsideContact />
      </div>
    </section>
  )
}

export default ContactForm;
