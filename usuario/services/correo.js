
var nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
 async function emailRegistro(datos)  {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
console.log(transport);
  // Información del email

  const info = await transport.sendMail({
    from: '"Paluz" <soporte@paluz.org>',
    to: email,
    subject: "Paluz - Comprueba tu cuenta",
    text: "Comprueba tu cuenta en Paluz",
    html: `<p>Hola: ${nombre} Comprueba tu cuenta en Paluz</p>
    <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enlace: 

    <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
    
    <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
    
    
    `,
  });
};

async function emailOlvidePassword (datos) {
  const { email, nombre, token } = datos;

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"Maraguias - Tu Guia Virtual Interactiva" <tesis2023@mline.cl>',
    to: email,
    subject: "Maraguias - Reestablece tu Password",
    text: "Reestablece tu Password",
    html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>

    <p>Sigue el siguiente enlace para generar un nuevo password: 

    <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
    
    <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
    
    
    `,
  });
};

async function enviar (datos) {
    const { email, nombre, token } = datos;
  console.log(datos,'hola')
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  
    // Información del email
  
    const info = await transport.sendMail({
      from: '"Maraguias - Tu Guia Virtual Interactiva" <tesis2023@mline.cl>',
      to: email,
      subject: "Maraguias - Reestablece tu Password",
      text: "Reestablece tu Password",
      html: `<p>Hola: ${nombre} has solicitado reestablecer tu password</p>
  
      <p>Sigue el siguiente enlace para generar un nuevo password: 
  
      <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
      
      <p>Si tu no solicitaste este email, puedes ignorar el mensaje</p>
      
      
      `,
    });
  };

module.exports = {
    emailRegistro,
    emailOlvidePassword,
    enviar
    // loginDid,
    // enviarCorreo,
    // reestablecerContrasena,
    // tipoMembresia
};