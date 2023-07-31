import React, { useEffect, useRef, useState } from 'react';
import Image from '../../Helper/Image';
import styles from './SecondBody.module.scss';
import AbordagemSection from './AbordagemSection/AbordagemSection';
import ExpSection from './ExpSection/ExpSection';
import PeopleJob from '../../../../images/PeopleJob.png';
import UseRect from '../../../hooks/UseRect';

const SecondBody = () => {
  const { halfScreenHeight } = UseRect();
  const animateRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (animateRef.current) {
      const { top, bottom } = animateRef.current.getBoundingClientRect();
      setIsVisible(bottom > 0 && top < halfScreenHeight);
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
      className={styles.mainSecondBody} 
      ref={animateRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      <div className={styles.secondBodyWrapper}>
        <AbordagemSection />

        <Image src={PeopleJob} alt='Pessoas felizes trabalhando' className={styles.peopleImage}/>

        <ExpSection />
      </div>
    </main>
  );
}

export default SecondBody;
