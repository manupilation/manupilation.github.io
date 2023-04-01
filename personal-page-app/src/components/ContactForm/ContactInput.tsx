import React, { Dispatch, SetStateAction } from 'react';
import styles from "./ContactForm.module.scss";

type ContactInputProps = {
  type: string,
  name: string,
  label: string,
  value: string,
  setValue: Dispatch<SetStateAction<string>>,
};

const ContactInput = (props: ContactInputProps) => {
  const {type, name, label, setValue, value} = props;

  return (
    <label className={styles.formInput}>
      {label}
      <input type={type} id={name} value={value} onChange={({target}) => setValue(target.value)}/>
    </label>
  );
};

export default ContactInput;
