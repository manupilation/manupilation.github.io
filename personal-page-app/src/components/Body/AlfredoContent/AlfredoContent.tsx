import React from 'react';
import Image from '../../Helper/Image';
import Separator from '../../Helper/Separator';
import Alfredo from '../../../../images/Alfredo.jpg';

const AlfredoContent = () => {
  return (
    <main>
      <Image src={Alfredo} alt='Alfredo prestes a atacar as mãos de um humano.'/>

      <Separator />

      <article>
        <h2>Conheça o Alfredo!</h2>

        <p>
          Alfredo é o meu pet. Alfredo é um gatinho castrado super curioso e extremamente sociável. Ele ama crianças, sair para passeios, sachês e petiscos.
          Milhares de animais estão neste momento pelas ruas precisando de um lar. Você pode fazer a diferença! Doe para uma ONG ou adote um Pet ❤️
        </p>
      </article>
    </main>
  );
}

export default AlfredoContent;
