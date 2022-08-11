import React from "react";
import styles from './styles.module.scss';

function PresentationSection() {
  return (
    <section className={styles.presentationSection}>
      <article>
        <h2>Olá! Boas-vindas ao meu portfólio.</h2>
        <p>Conhecido pelos amigos como "Manu", acredito na tecnologia como ponte para igualdade entre todos. Atuo com tecnologias que podem ser verificadas <a href="https://github.com/manupilation" target="_blank"
        rel="external">Aqui</a>.</p>
        <a className={styles.projects} href="https://github.com/manupilation?tab=repositories"
        rel="external">Projetos</a>
      </article>
      <div className={styles.selfImage}>
        <img src="/Eur.jpg" alt="Foto de Manu"/> 
      </div>
    </section>
  )
}

export default PresentationSection
