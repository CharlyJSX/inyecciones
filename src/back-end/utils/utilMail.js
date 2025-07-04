// enviarCorreo.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInjectionReminder({ email, name, nextDate }) {
  try {
    await resend.emails.send({
      from: 'notificaciones@tudominio.com', // Cambia por tu dominio verificado en Resend
      to: email,
      subject: '¡Recordatorio importante para tu salud!',
      html: `<h3>Hola, ${name} 👋</h3>
        <p>Este es un recordatorio personalizado para ti.</p>
        <p><b>¡Mañana es el día de tu próxima inyección!</b></p>
        <p>Por favor, agenda tu cita o acude a tu centro de salud el <b>${nextDate}</b>.</p>
        <p>¡Cuida tu salud y no olvides tu aplicación!</p>
        <br><small>Este mensaje es automático, no respondas a este correo.</small>`
    });
    console.log('Correo enviado a', email);
  } catch (error) {
    console.error('Error al enviar correo:', error);
  }
}
