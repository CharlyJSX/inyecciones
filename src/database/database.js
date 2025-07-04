import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';

dotenv.config();

const {
  DATABASE_URL,
  DATABASE,
  USER,
  PASSWORD,
  HOST,
  PORT_DB
} = process.env;

export const sequelize = DATABASE_URL
  ? new Sequelize(DATABASE_URL, { dialect: 'postgres' })
  : new Sequelize(
      DATABASE,
      USER,
      PASSWORD,
      {
        host: HOST || 'localhost',
        dialect: 'postgres',
        port: PORT_DB ? parseInt(PORT_DB) : 5432
      }
    );




/*



import pg from 'pg'


export const pool = new pg.Pool({
    user: USER,
    host: HOST,
    password: PASSWORD,
    database: DATABASE,
    port: DB_PORT
})

pool.query('SELECT NOW()').then(result => {
    console.log(result)
})




*/


