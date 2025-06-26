import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import './back-end/routes/inyeccion.routes.js';
import router from './back-end/routes/inyeccion.routes.js';



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



export const app = express(); 

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static("./"));

app.use(express.urlencoded({ extended: false }));



app.use(express.static(path.join(__dirname, 'public')));



app.use(express.json());

app.use(router);












export default app;