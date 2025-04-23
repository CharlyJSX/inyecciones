const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');
const http = require('node:http')
const fs = require('node:fs')

const app = express();
const PORT = 3000;

// const authRoutes = require('./auth');
// const notifyRoutes = require('./notify');
// const auth = require('./middleware');

// app.use('/auth', authRoutes);
// app.use('/notificaciones', auth, notifyRoutes); // solo usuarias logueadas


app.use(cors());
app.use(bodyParser.json());

app.post('/usuarias', async (req, res) => {
  const { nombre, fechaInyeccion, duracionMeses } = req.body;
  const result = await pool.query(
    'INSERT INTO usuarias (nombre, fecha_inyeccion, duracion_meses) VALUES ($1, $2, $3) RETURNING *',
    [nombre, fechaInyeccion, duracionMeses]
  );
  res.json(result.rows[0]);
});

app.get('/usuarias', async (req, res) => {
  const result = await pool.query('SELECT * FROM usuarias ORDER BY fecha_inyeccion DESC');
  res.json(result.rows);
});


/* 
app.get('/', (req, res) => {
  res.render('index', { nombre: 'María' });
});
*/

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
