const express = require('express');
const pool = require('./db');
const router = express.Router();

router.get('/alertas', async (req, res) => {
  const result = await pool.query(`
    SELECT * FROM usuarias
    WHERE CURRENT_DATE >= fecha_inyeccion + (interval '1 month' * (duracion_meses - 1))
  `);
  res.json(result.rows);
});

module.exports = router;
