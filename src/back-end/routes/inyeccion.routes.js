import { Router } from "express";
import {rutaInicio, inyeccionesList, createInyeccion, updateInyeccion, deleteInyeccion, renderInyecciones, editInyeccion} from "../controllers/inyecciones.controller.js"

const inyeccionRoutes = Router();

inyeccionRoutes.get('/', inyeccionesList)
// inyeccionRoutes.get('/', renderInyecciones)
inyeccionRoutes.get('/inyeccionesEdit/:id', editInyeccion)
// inyeccionRoutes.get('/inyecciones', getInyecciones)
inyeccionRoutes.post('/inyeccionesSave', createInyeccion)
inyeccionRoutes.post('/inyeccionesUpdate/:id', updateInyeccion)
inyeccionRoutes.get('/inyeccionesDelete/:id', deleteInyeccion)
// inyeccionRoutes.get('/inyecciones/:id', getInyeccion)
inyeccionRoutes.get('/inicio', (req, res) => {
    res.send("Hello World");
});

export default inyeccionRoutes; 