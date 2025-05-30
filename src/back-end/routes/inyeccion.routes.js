import { Router } from "express";
import { getInyecciones, createInyeccion, updateInyeccion, deleteInyeccion, getInyeccion} from "../controllers/inyecciones.controller.js"

const inyeccionRoutes = Router();

inyeccionRoutes.get('/inyecciones', getInyecciones)
inyeccionRoutes.post('/inyecciones', createInyeccion)
inyeccionRoutes.put('/inyecciones/:id', updateInyeccion)
inyeccionRoutes.delete('/inyecciones/:id', deleteInyeccion)
inyeccionRoutes.get('/inyecciones/:id', getInyeccion)

export default inyeccionRoutes; 