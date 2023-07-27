import React from 'react';

const exps = [
  'Back-end', 'Front-end', 'Modelagem de dados', 'Docker', 'Sistemas', 'Testes automatizados', 'Ux/Ui'
];

const ExpSection = () => {
  return (
    <section>
      <h2>Tenho experiência em:</h2>
      <ul>
        {
          exps.map((exp: string) => <li>{exp}</li>)
        }
      </ul>
    </section>
  )
}

export default ExpSection