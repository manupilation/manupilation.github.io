import React from 'react';
import styles from "./ContactForm.module.scss";
import ManuImage from "../../../images/Manur.jpg";
import {ReactComponent as Download} from '../../../images/download.svg';
import CV from '../../../CurriculoManu.pdf';
import ContactFormInputs from './ContactFormInputs';
import AsideContact from './AsideContact';
import Image from '../Helper/Image';

const ContactForm = () => {
  return (
    <section className={styles.contactContainer  + " animaRight"}>
      <article className={styles.presentationContainer}>
        <Image src={ManuImage} alt="Imagem do Manu. Atrás dele, uma cerca viva." className={styles.imageContainer} />
        <a className={styles.downloadCV} href={CV} download>
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
