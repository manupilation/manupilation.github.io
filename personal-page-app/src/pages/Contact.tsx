import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Head from "../Head";

const Contact = () => {
  return (
    <main>
      <Head title="Entre em contato!" description="Entre em contato comigo! Vamos conversar um pouco sobre tecnologia :)"/>
      <ContactForm />
    </main>
  );
};

export default Contact;
