import React from 'react';
import PresentationSection from '../Presentation-section/Presentation-section'
import styles from './styles.module.scss';

function MainContent() {
  return (
    <main className={styles.mainContainer}>
      <PresentationSection/>
    </main>
  )
}

export default MainContent;
