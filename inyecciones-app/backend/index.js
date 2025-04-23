const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();
const PORT = 3000;

const authRoutes = require('./auth');
const notifyRoutes = require('./notify');
const auth = require('./middleware');

app.use('/auth', authRoutes);
app.use('/notificaciones', auth, notifyRoutes); // solo usuarias logueadas


app.use(cors());
app.use(bodyParser.json());

app.post('/usuarios', async (req, res) => {
  const { nombre, fechaInyeccion, duracionMeses } = req.body;
  const result = await pool.query(
    'INSERT INTO usuarias (nombre, fecha_inyeccion, duracion_meses) VALUES ($1, $2, $3) RETURNING *',
    [nombre, fechaInyeccion, duracionMeses]
  );
  res.json(result.rows[0]);
});

app.get('/usuarios', async (req, res) => {
  const result = await pool.query('SELECT * FROM usuarias ORDER BY fecha_inyeccion DESC');
  res.json(result.rows);
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
