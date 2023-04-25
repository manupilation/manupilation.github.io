import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';
import construction from '../../../images/construction.jpg';
import Image from "../Helper/Image";

function NoBuildBody() {
  return (
    <main className={styles.noBuildContainer  + " animaRight"}>
      <section>
        <h3>Ops! Parece que essa página ainda não existe 😔.</h3>
        <p className={styles.paragraph}>Mas calma, acho que o Manu irá fazê-la em breve! 🥺</p>
        <p className={styles.paragraph}>Clique no botão 'voltar' e confira as outras seções.</p>
      </section>
      <Image src={construction} alt="Foto de uma construção com maquinários em funcionamento."/>
      <Link className={styles.toBackButton} to="/">Voltar</Link>
      <p className={styles.hojipago}>Imagem por <a href="https://unsplash.com/es/@hojipago">@hojipago</a></p>

    </main>
  )
}

export default NoBuildBody;
