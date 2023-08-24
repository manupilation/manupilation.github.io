import React, { useState } from 'react';
import styles from './ExperienceFilter.module.scss';

const ExperienceFilter = () => {
  const [isFront, setIsFront] = useState(true);
  const [isBack, setIsBack] = useState(false);

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
    <section className={styles.expFilter} >
      <div>
        outside circle
        <div className={`${styles.middleCircle} ${verifyActiveStack()}`}>
          middle circle
          <button
            type="button"
            onClick={(e) => setFullStack(e)}
          >inside circle</button>
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={(e) => handleFront(e)}
        >FRONT-END</button>
        <button
          type="button"
          onClick={(e) => handleBack(e)}
        >BACK-END</button>
      </div>
    </section>
  );
};

export default ExperienceFilter;