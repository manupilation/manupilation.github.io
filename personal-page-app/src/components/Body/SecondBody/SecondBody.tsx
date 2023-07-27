import React from 'react';
import Image from '../../Helper/Image';
import styles from './SecondBody.module.scss';
import AbordagemSection from './AbordagemSection/AbordagemSection';
import ExpSection from './ExpSection/ExpSection';
import PeopleJob from '../../../../images/PeopleJob.png';

const SecondBody = () => {
  return (
    <main>
      <div>
        <AbordagemSection />

        <Image src={PeopleJob} alt='Pessoas felizes trabalhando' className={styles.peopleImage}/>

        <ExpSection />
      </div>
    </main>
  );
}

export default SecondBody;
