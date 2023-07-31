import React, { useEffect, useRef, useState } from 'react';
import Image from '../../Helper/Image';
import Separator from '../../Helper/Separator';
import Alfredo from '../../../../images/Alfredo.jpg';
import styles from './AlfredoContent.module.scss';
import UseRect from '../../../hooks/UseRect';

const AlfredoContent = () => {
  const { halfScreenHeight } = UseRect();
  const animateRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (animateRef.current) {
      const { top, bottom } = animateRef.current.getBoundingClientRect();
      setIsVisible(bottom > 0 && top < (halfScreenHeight * 1.4));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [halfScreenHeight]);
  return (
    <main 
      className={styles.mainAlfredo}
      ref={animateRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      <Image src={Alfredo} alt='Alfredo prestes a atacar as mãos de um humano.' className={styles.catImage}/>

      <Separator />

      <article className={styles.alfredoArticle}>
        <h2>Conheça o Alfredo!</h2>

        <p>
          Alfredo é o meu pet. Alfredo é um gatinho castrado super curioso e extremamente sociável. Ele ama crianças, sair para passeios, sachês e petiscos.
          Milhares de animais estão neste momento pelas ruas precisando de um lar. Você pode fazer a diferença! Doe para uma ONG ou adote um Pet ❤️.
        </p>
      </article>
    </main>
  );
}

export default AlfredoContent;
