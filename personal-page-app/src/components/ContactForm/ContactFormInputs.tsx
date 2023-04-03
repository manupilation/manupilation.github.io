import React, { useEffect, useState } from 'react';
import styles from './ContactForm.module.scss';
import ContactInput from './ContactInput';
import { ReactComponent as Setinha} from '../../../images/download.svg';

const ContactFormInputs = () => {
  const defaultEmail = "manupilation.dev@gmail.com"
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [invalidData, setInvalidData] = useState<boolean>(true);
  const emailRegex =  /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/

  useEffect(() => {
    (name.length < 3 || (!emailRegex.test(email)) || message.length < 10) ?
      setInvalidData(true)
      :
      setInvalidData(false);

      console.log(invalidData);
      
  }, [name, email, message]);

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

        <a
          className={`${styles.sendButton} ${invalidData ? styles.offSendButton : ""}`}
          href={`mailto:${defaultEmail}?subject=${name + " - " + email}&body=${message}`}
        >
          ENVIAR
          <Setinha />
        </a>
      </form>

  </article>
  );
};

export default ContactFormInputs;
