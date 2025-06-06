import express from 'express'
import path from "path";
import { fileURLToPath } from "url";

import inyeccionRoutes from './back-end/routes/inyeccion.routes.js';


const app = express(); 

app.use(express.json());
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));



app.use(inyeccionRoutes);

export default app;