import { RC_PUBLIC_KEY } from '../_constants';
import axios from 'axios';
import { load } from 'recaptcha-v3';
import React, { useState, useEffect } from 'react';
import { ContactFormRequest, ContactFormResponse, WithChildren, WithHash } from '../_types';
import validateForm from '../utilities/formValidation';
import hasher from '../utilities/hasher';
import MainHead from '../components/MainHead';
import Main from '../components/Main';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Section from '../components/Section';
import Button from '../components/Button';
import Footer from '../components/Footer';
import clsx from 'clsx';

const contactApiRoute = '/api/contactMe';
let recaptcha;

const loadRecaptcha = () => {
  load(RC_PUBLIC_KEY).then(async (recaptchaInstance) => {
    recaptcha = recaptchaInstance;
  });
};

const doFormValidation = async (
  dataObject: ContactFormRequest,
  hash: string
): Promise<ContactFormResponse> => {
  const isValid: boolean | string[] = validateForm(dataObject);

  if (isValid === true) {
    return await sendForm(dataObject, hash);
  } else if (Array.isArray(isValid)) {
    return await new Promise((resolve) => {
      resolve({
        sentEmail: false,
        status: false,
        message: `Encontramos los siguientes errores: \n${isValid.join('\n')}`,
      });
    });
  }
};

const sendForm = async (
  dataObject: ContactFormRequest,
  hash: string
): Promise<ContactFormResponse> => {
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
  const initialForm = {
    name: '',
    email: '',
    message: '',
  };
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState(null);
  const [sending, setSending] = useState(false);

  const buttonBaseClasses = 'block mx-auto text-white w-full sm:w-64 focus:outline-none';
  const buttonConditionalClasses = {
    'bg-mediumlightgrey cursor-default': sending,
    'bg-purple hover:bg-darkpurple focus:bg-darkpurple': !sending,
  };
  const buttonClasses = clsx(buttonBaseClasses, buttonConditionalClasses);

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
          className="sm:section-full-height py-4 sm:pt-20"
          innerClassName="bg-white rounded-xl px-8 sm:px-12"
          textAlign="left"
        >
          <div className="flex items-center justify-around">
            <img
              className="w-1/6"
              src="https://res.cloudinary.com/hadmouse/image/upload/v1596765387/kiwa/Icon-avion_jtho6f.svg"
              alt="Icono de mensaje"
            />
            <h2 className="text-xl sm:text-2xl w-5/6 pl-4 sm:pl-6 leading-6 sm:leading-normal">
              ¿Quieres dejarme un mensaje? <br />
              Te respondo en breve.
            </h2>
          </div>

          <input
            type="text"
            autoComplete="name"
            placeholder="Nombre *"
            className="text-input"
            onChange={(event) => {
              setForm({ ...form, name: event.target.value });
            }}
            value={form.name}
            autoFocus
          />
          <input
            type="email"
            autoComplete="email"
            placeholder="Correo electrónico *"
            className="text-input"
            onChange={(event) => {
              setForm({ ...form, email: event.target.value });
            }}
            value={form.email}
          />

          <p>
            <label htmlFor="message" className="text-grey">
              Mensaje
            </label>
          </p>
          <textarea
            className="text-input textarea-input"
            id="message"
            max-length="1500"
            onChange={(event) => {
              setForm({ ...form, message: event.target.value });
            }}
            value={form.message}
          ></textarea>

          <Button
            onClick={() => {
              setSending(true);

              doFormValidation(form, hash).then((response) => {
                setSending(false);

                if (response.status) {
                  setForm(initialForm);
                }

                setFeedback(response.message);
              });
            }}
            type="button"
            className={buttonClasses}
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
