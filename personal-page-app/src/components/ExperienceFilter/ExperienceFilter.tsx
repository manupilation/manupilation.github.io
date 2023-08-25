import React, { useContext } from 'react';
import styles from './ExperienceFilter.module.scss';
import { experienceContext } from '../../context/experienceContext';

const ExperienceFilter = () => {
  const {isFront, isBack, setIsFront, setIsBack} = useContext(experienceContext);

  const verifyActiveStack = (): string => {
    if (isFront && isBack) return 'FULL';

    return isFront ? 'FRONT' : 'BACK';
  }

  const handleFront = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsFront(true);
    setIsBack(false);
  }

  const handleBack = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsBack(true);
    setIsFront(false);
  }

  const setFullStack = (event: React.MouseEvent) => {
    event.preventDefault();

    setIsFront(true);
    setIsBack(true);
  }

  return (
    <section className={styles.expFilter}>
      <div className={styles.outsideCircle}>
        <div className={`${styles.middleCircle} ${verifyActiveStack()}`}>
          <button
            type="button"
            onClick={(e) => setFullStack(e)}
            className={`${verifyActiveStack()}`}
          ></button>
        </div>
      </div>

      <div className={styles.buttonSection}>
        <button
          type="button"
          onClick={(e) => handleFront(e)}
          className={`${styles.frontButton} ${isFront ? 'active' : ''}`}
        >FRONT-END</button>
        <button
          type="button"
          onClick={(e) => handleBack(e)}
          className={`${styles.backButton} ${
            isBack ? 'active' : ''
          }`}
        >BACK-END</button>
      </div>
    </section>
  );
};

export default ExperienceFilter;
