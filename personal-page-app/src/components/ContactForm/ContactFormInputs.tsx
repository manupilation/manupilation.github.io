import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import ContactInput from './ContactInput';
import { ReactComponent as Setinha} from '../../../images/download.svg';
import AsideContact from './AsideContact';

const ContactFormInputs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <article className={styles.formContainer}>
      <h3>Entre em contato:</h3>
      <form>
        <ContactInput
          type='text'
          name='nome'
          label='Nome:'
          value={name}
          setValue={setName}
        />
        <ContactInput
          type='text'
          name='email'
          label='Email:'
          value={email}
          setValue={setEmail}
        />
        <label className={styles.formInput}>
          Mensagem:
          <textarea
            placeholder='Escreva aqui sua mensagem...'
            value={message}
            onChange={({target}) => setMessage(target.value)}
            rows={3}
          />
        </label>

        <a>
          <Setinha />
          ENVIAR
        </a>
      </form>

      <AsideContact />
  </article>
  );
};

export default ContactFormInputs;
