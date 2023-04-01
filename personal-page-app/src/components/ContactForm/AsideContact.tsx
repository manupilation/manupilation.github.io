import React from 'react';
import styles from './ContactForm.module.scss';
import { ReactComponent as Copy} from '../../../images/copy.svg';
import insta from '../../../images/instagram.svg';
import linkedin from '../../../images/linkedin.svg';
import github from '../../../images/github.svg';

const AsideContact = () => {
  return (
    <aside>
      <div>
        <label className={styles.formInput}>
          Contato:
          <input
            value="manupilation.dev@gmail.com"
            type="text"
            readOnly={true}
          />
          <a><Copy /></a>
        </label>
      </div>
    
      <div className={styles.manuData}>
        <ul>
          <li>Emanoel Mattos Ribeiro</li>
          <li>23 Anos</li>
          <li>Pernambuco, Brasil</li>
        </ul>
      </div>
    
      <div>
        <nav aria-label="redes-sociais">
          <ul>
            <a
              href="https://github.com/manupilation"
              target="_blank"
              rel="external">
              <img src={github}
              alt="github icon"/>
            </a>
            <a 
              href="https://www.linkedin.com/in/emanoel-mattos-ribeiro/"
              target="_blank"
              rel="external">
              <img src={linkedin} alt="linkedin icon"/>
            </a>
            <a
              href="https://www.instagram.com/manou.exe/"
              target="_blank"
              rel="external">
              <img src={insta} alt="instagram icon" />
            </a>
          </ul>
        </nav>
      </div>
    </aside>
    )
  }
  
  export default AsideContact