import React from 'react'
import styles from "./ContactForm.module.scss";
import ManuImage from "../../../images/Manur.jpg";
import {ReactComponent as Download} from '../../../images/download.svg';
import ContactFormInputs from './ContactFormInputs';

const ContactForm = () => {
  return (
    <section className={styles.contactContainer}>
      <article className={styles.presentationContainer}>
        <div className={styles.imageContainer}>
          <img src={ManuImage} alt="Imagem do Manu. Atrás dele, uma cerca viva."/>
        </div>
        <a className={styles.downloadCV}>
          <Download />
          <p>CV</p>
        </a>
      </article>
      <ContactFormInputs />
    </section>
  )
}

export default ContactForm