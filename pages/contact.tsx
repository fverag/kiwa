import { RC_PUBLIC_KEY } from '../_constants';
import axios from 'axios';
import { load } from 'recaptcha-v3';
import React, { useState, useEffect } from 'react';
import { ContactFormRequest, WithChildren, WithHash } from '../_types';
import validateForm from '../utilities/formValidation';
import hasher from '../utilities/hasher';
import MainHead from '../components/MainHead';
import Main from '../components/Main';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Section from '../components/Section';
import Button from '../components/Button';
import Footer from '../components/Footer';

const contactApiRoute = '/api/contactMe';
let recaptcha;

const loadRecaptcha = () => {
  load(RC_PUBLIC_KEY).then(async (recaptchaInstance) => {
    recaptcha = recaptchaInstance;
  });
};

const doFormValidation = async (dataObject: ContactFormRequest, hash: string) => {
  const isValid: boolean | string[] = validateForm(dataObject);

  if (isValid === true) {
    return await sendForm(dataObject, hash);
  } else if (Array.isArray(isValid)) {
    return `Encontramos los siguientes errores: \n${isValid.join('\n')}`;
  }
};

const sendForm = async (dataObject: ContactFormRequest, hash: string) => {
  const rcToken = await recaptcha.execute('submitContactForm').then((token) => token);
  const sendableData = { ...dataObject, hash, rcToken };

  return await axios.post(contactApiRoute, sendableData).then((response) => {
    return response.data;
  });
};

const renderCurrentMessage = (message: string) => {
  if (message) {
    return <p className="whitespace-pre-line text-center">{message}</p>;
  }

  return null;
};

export async function getServerSideProps(context) {
  const ip = context.req.headers['x-forwarded-for'] || context.req.connection.remoteAddress;
  const hash = hasher(ip);

  return {
    props: {
      hash,
    },
  };
}

const ContactPage: React.FC & WithHash = (props: WithChildren & WithHash) => {
  const hash = props.hash;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState(null);
  const formData = { name, email, message };

  useEffect(() => {
    loadRecaptcha();
  });

  return (
    <>
      <MainHead pageTitle="Contacto" />
      <Main useBG>
        <Header>
          <Nav />
        </Header>

        <Section
          narrow
          className="sm:section-full-height"
          innerClassName="bg-white rounded-xl mb-6 px-12"
          textAlign="left"
        >
          <div className="flex items-center justify-around">
            <img
              className="w-1/6"
              src="https://res.cloudinary.com/hadmouse/image/upload/v1596765387/kiwa/Icon-avion_jtho6f.svg"
              alt="Icono de mensaje"
            />
            <h2 className="text-2xl w-5/6 pl-6">
              ¿Quieres dejarme un mensaje? <br />
              Te respondo en breve.
            </h2>
          </div>

          <input
            type="text"
            placeholder="Nombre *"
            className="block my-4 w-full"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Correo electrónico *"
            className="block my-4 w-full"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <textarea
            className="block my-4 w-full"
            placeholder="Mensaje"
            max-length="1500"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>

          <Button
            onClick={() => {
              doFormValidation(formData, hash).then((message) => {
                let theMessage;

                if (typeof message === 'object') {
                  theMessage = message.message;
                  setName('');
                  setEmail('');
                  setMessage('');
                } else {
                  theMessage = message;
                }

                setFeedback(theMessage);
              });
            }}
            type="button"
          >
            Enviar
          </Button>
          {renderCurrentMessage(feedback)}
        </Section>

        <Footer />
      </Main>
    </>
  );
};

export default ContactPage;
