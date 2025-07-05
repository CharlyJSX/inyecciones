// enviarCorreo.js

import nodemailer from 'nodemailer';

export async function sendInjectionReminder({ email, name, nextDate }) {
  // Configura el transporte
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // tu correo
      pass: process.env.MAIL_PASS  // tu contraseña o clave de aplicación
    }
  });

  // Configura el mensaje personalizado
  let mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: '¡Recordatorio importante de tu próxima inyección!',
    html: `<h3>Hola, ${name} 👋</h3>
      <p>Este es un recordatorio personalizado para ti.</p>
      <p><b>¡Mañana es el día de tu próxima inyección!</b></p>
      <p>Por favor <b>${nextDate}</b>.</p>
      <p>¡Cuida tu salud y no olvides tu aplicación!</p>
      <br><small>Este mensaje es automático, no respondas a este correo.</small>`
  };

  // Envía el correo
  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado a', email);
  } catch (error) {
    console.error('Error al enviar correo:', error);
  }
}
