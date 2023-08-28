import React, { useContext } from 'react';
import FilterList from '../../hooks/FilterList';
import ExpComponent from './ExpComponent';
import experience from '../../types/ExpType';
import { experienceContext } from '../../context/experienceContext';
import styles from './Exp.module.scss';

const ExpList = () => {
  const {
    frontList,
    fullList,
    backList,
    onlyBack,
    onlyFront,
  } = FilterList();
  const {isBack, isFront} = useContext(experienceContext);

  if(!isBack)
    return (
      <section className={styles.expSection}>
        <h2>Front-End:</h2>
        <div className={styles.expList}>
          {
            frontList.map((exp: experience) => <ExpComponent exp={exp} key={exp.id}/>)
          }
        </div>

        <h2>Back-End:</h2>
        <div className={styles.expList}>
          {
            onlyBack.map((exp: experience) => <ExpComponent exp={exp} key={exp.id}/>)
          }
        </div>
      </section>
    )

  if(!isFront)
    return (
      <section className={styles.expSection}>
        <h2>Back-End:</h2>
        <div className={styles.expList}>
          {
            backList.map((exp: experience) => <ExpComponent exp={exp} key={exp.id}/>)
          }
        </div>

        <h2>Front-End:</h2>
        <div className={styles.expList}>
          {
            onlyFront.map((exp: experience) => <ExpComponent exp={exp} key={exp.id}/>)
          }
        </div>
      </section>
    )

  return (
    <section className={styles.expSection}>
      <h2>Full-Stack:</h2>
      <div className={styles.expList}>
        {
          fullList.map((exp: experience) => <ExpComponent exp={exp} key={exp.id}/>)
        }
      </div>
    </section>
  );
}

export default ExpList;
