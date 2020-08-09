import { ContactFormRequest } from '../_types';

const validateForm = (
  { name, email, message }: ContactFormRequest,
  returnOnlyBoolean = false
): boolean | string[] => {
  const errors = [];
  const isNameValid = name.length > 3 && name.indexOf(' ') >= 0;
  const isEmailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
  const isMessageValid = message.length > 10;

  if (!isNameValid) {
    errors.push('Ingrese un nombre y apellido válidos');
  }

  if (!isEmailValid) {
    errors.push('Ingrese un email válido');
  }

  if (!isMessageValid) {
    errors.push('Ingrese un mensaje de al menos diez caracteres');
  }

  if (errors.length) {
    return returnOnlyBoolean ? false : errors;
  }

  return true;
};

export default validateForm;
