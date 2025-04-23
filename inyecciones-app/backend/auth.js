const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('./db');
const router = express.Router();

const JWT_SECRET = 'tu_clave_secreta_segura'; // usa .env en producción

router.post('/registro', async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  const result = await pool.query(
    'INSERT INTO usuarias (nombre, email, password, fecha_inyeccion, duracion_meses) VALUES ($1, $2, $3, NOW(), 0) RETURNING id',
    [email.split('@')[0], email, hashed]
  );
  res.json({ message: 'Registrada', id: result.rows[0].id });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const usuaria = await pool.query('SELECT * FROM usuarias WHERE email = $1', [email]);
  if (!usuaria.rows.length) return res.status(401).json({ error: 'No existe' });

  const valida = await bcrypt.compare(password, usuaria.rows[0].password);
  if (!valida) return res.status(401).json({ error: 'Contraseña incorrecta' });

  const token = jwt.sign({ id: usuaria.rows[0].id }, JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});

module.exports = router;


const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      window.location.href = 'index.html';
    } else {
      alert('Error al iniciar sesión');
    }
  });
}

if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:3000/auth/registro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    alert('Registrada correctamente');
    window.location.href = 'login.html';
  });
}
