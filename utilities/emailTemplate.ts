import { ContactFormRequest } from '../_types';

const template = ({ name, email, message }: ContactFormRequest): string => {
  const theTemplate = `
  <style>
    body {
      font-family: 'Open Sans', Arial, sans-serif;
      margin: 0;
    }
    a {
      color: #8A3EF3;
    }
  </style>

  <div style='background-color: #7F3DF7; padding: 40px 15px;'>
    <div style='border: 2px solid #8A3EF3; max-width: 600px; margin-left: auto; margin-right: auto; background-color: #efefef; padding: 20px; border-radius: 6px;'>
      <p>Hola Kiwita 😘, te llegó un nuevo correo de contacto</p>

      <hr>
      <table>
        <tbody>
          <tr>
            <td style='padding-top: 5px; padding-bottom: 5px;;'><strong>Nombre:</strong></td>
            <td style='padding-top: 5px; padding-bottom: 5px;;'>${name}</td>
          </tr>

          <tr>
            <td style='padding-top: 5px; padding-bottom: 5px;;'><strong>Email:</strong></td>
            <td style='padding-top: 5px; padding-bottom: 5px;;'>${email}</td>
          </tr>

          <tr>
            <td style='padding-top: 5px; padding-bottom: 5px;;'><strong>Mensaje:</strong></td>
            <td style='padding-top: 5px; padding-bottom: 5px;;'>${message}</td>
          </tr>
        </tbody>
      </table>

      <hr>

      <p>Puedes darle a <strong><i>Responder a</i></strong> en tu correo para contestarle directamente 😉.</p>
    </div>
  </div>`;

  return theTemplate;
};

export default template;
