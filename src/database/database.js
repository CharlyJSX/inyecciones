

import Sequelize from "sequelize";



import { DATABASE, USER, PASSWORD } from '../../.env'


export const sequelize = new Sequelize(
    DATABASE, 
    USER, 
    PASSWORD, 
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


