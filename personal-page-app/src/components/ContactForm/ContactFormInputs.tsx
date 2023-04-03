import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import ContactInput from './ContactInput';
import { ReactComponent as Setinha} from '../../../images/download.svg';

const ContactFormInputs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <article className={styles.formContainer}>
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
            placeholder='Sua mensagem...'
            value={message}
            onChange={({target}) => setMessage(target.value)}
            rows={1}
          />
        </label>

        <a className={styles.sendButton}>
          ENVIAR
          <Setinha />
        </a>
      </form>

  </article>
  );
};

export default ContactFormInputs;
