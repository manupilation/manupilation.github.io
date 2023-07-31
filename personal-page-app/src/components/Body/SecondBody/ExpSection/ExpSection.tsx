import React from 'react';
import styles from '../SecondBody.module.scss';

export const exps = [
  'Back-end', 'Front-end', 'Modelagem de dados', 'Docker', 'Sistemas', 'Testes automatizados', 'Ux/Ui'
];

const ExpSection = () => {
  return (
    <section className={styles.expSection}>
      <h2>Tenho experiência em:</h2>
      <ul>
        {
          exps.map((exp: string, i) => <li key={i}>{exp}</li>)
        }
      </ul>
    </section>
  )
}

export default ExpSection