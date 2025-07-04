// enviarCorreo.js

const nodemailer = require('nodemailer');

import { inyeccionesList, inyecciones } from '../controllers/inyecciones.controller'

// Configura el transporte
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'carlosdavidmancia@gmail.com',     // tu correo
    pass: 'tupasswordoappkey'       // tu contraseña o clave de aplicación
  }
});

// Correos desde base de datos


const data = inyecciones;






// Configura el mensaje
let mailOptions = {
  from: 'carlosdavidmancia@gmail.com',
  to: 'destinatario@ejemplo.com',
  subject: 'Recordatorio de Inyección',
  text: 'Este es un correo de prueba enviado desde una aplicación Node.js usando Nodemailer.',
  html: '<h3>Hola 👋</h3><p>Este es un <b>correo de prueba</b> enviado desde Node.js.</p>'
};

// Envía el correo
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error al enviar correo:', error);
  }
  console.log('Correo enviado:', info.response);
});
