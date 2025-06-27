

import Sequelize from "sequelize";
import 'dotenv/config';

export const sequelize = new Sequelize(
    process.env.DATABASE, 
    process.env.USER, 
    process.env.PASSWORD, 
    {
    host: 'localhost',
    dialect: 'postgres'
}
);




/*



import pg from 'pg'


export const pool = new pg.Pool({
    user: "charly",
    host: "localhost",
    password: "charly",
    database: "inyecciones",
    port: "5432"
})

pool.query('SELECT NOW()').then(result => {
    console.log(result)
})




*/


