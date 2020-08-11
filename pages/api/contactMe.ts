import {
  MOCK_CONTACT_FORM,
  RC_SCORE_THRESHOLD,
  RC_SECRET_KEY,
  SENDGRID_API_KEY,
} from '../../_constants';
import axios from 'axios';
import qs from 'qs';
import nodemailer from 'nodemailer';
import sendgridTransport from 'nodemailer-sendgrid-transport';
import hasher from '../../utilities/hasher';
import validateForm from '../../utilities/formValidation';
import emailTemplate from '../../utilities/emailTemplate';
import { ContactFormResponse } from '../../_types';

const getRecaptchaScore = async (token) => {
  const rcVerifyRoute = 'https://www.google.com/recaptcha/api/siteverify';
  const response = await axios({
    method: 'post',
    url: rcVerifyRoute,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify({
      secret: RC_SECRET_KEY,
      response: token,
    }),
  })
    .then((response) => {
      if (response.data.success) {
        return response.data.score;
      }
      return 0;
    })
    .catch(() => {
      return 0;
    });

  return response;
};

const mailerTransporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: SENDGRID_API_KEY,
    },
  })
);

const sendMail = ({ fromEmail, fromName, replyToName, replyToEmail, html, toEmail }) => {
  const replyTo =
    replyToEmail && replyToName
      ? `${replyToName} <${replyToEmail}>`
      : `${replyToName || replyToEmail}`;
  const from = fromEmail && fromName ? `${fromName} <${fromEmail}>` : `${fromName || fromEmail}`;
  const message = {
    from: from,
    to: toEmail,
    subject: 'Esto es un test',
    html,
    replyTo: replyTo,
  };

  return new Promise((resolve, reject) => {
    mailerTransporter.sendMail(message, (error, info) => (error ? reject(error) : resolve(info)));
  });
};

export default async (request, response): Promise<ContactFormResponse> => {
  const bodyRequest = request.body;
  const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  const hash = hasher(ip);
  const isValidHash = bodyRequest.hash === hash;
  const rcToken = bodyRequest.rcToken;
  const score = await getRecaptchaScore(rcToken);
  const successMessage = 'Se ha enviado correctamente tu mensaje';
  const errorMessage = 'No se ha enviado tu mensaje por sospecha de spam';
  const isValidForm = validateForm(
    {
      email: bodyRequest.email,
      message: bodyRequest.message,
      name: bodyRequest.name,
    },
    true
  );

  let message = score >= RC_SCORE_THRESHOLD ? successMessage : errorMessage;
  let status = score >= RC_SCORE_THRESHOLD;
  let sendEmail = false;

  if (!isValidForm) {
    message = 'No has ingresado los campos correctamente';
    status = false;
  }

  if (!isValidHash) {
    message = errorMessage;
    status = false;
  }

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');

  if (status) {
    if (MOCK_CONTACT_FORM) {
      sendEmail = true;
    } else {
      sendEmail = await sendMail({
        fromName: 'Fabián Vera',
        fromEmail: 'fabian.vera.g@gmail.com',
        toEmail: 'valentinamorall@gmail.com',
        replyToEmail: bodyRequest.email,
        replyToName: bodyRequest.name,
        html: emailTemplate(bodyRequest),
      }).then(() => true);
    }
  }

  return response.json({
    sentEmail: sendEmail,
    status,
    message,
  });
};
