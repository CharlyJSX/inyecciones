// enviarCorreo.js

import nodemailer from 'nodemailer';

export async function sendInjectionReminder({ email, name, nextDate }) {
  // Configura el transporte
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carlosdavidmancia@gmail.com', // tu correo
      pass: 'tupasswordoappkey' // tu contraseña o clave de aplicación
    }
  });

  // Configura el mensaje
  let mailOptions = {
    from: 'carlosdavidmancia@gmail.com',
    to: email,
    subject: 'Recordatorio de Inyección',
    text: `Hola ${name}, tu próxima inyección es el día ${nextDate}.`,
    html: `<h3>Hola ${name} 👋</h3><p>Este es un recordatorio de que tu próxima inyección es el <b>${nextDate}</b>.</p>`
  };

  // Envía el correo
  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado a', email);
  } catch (error) {
    console.error('Error al enviar correo:', error);
  }
}
