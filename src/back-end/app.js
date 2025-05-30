import express from 'express'
import projectRoutes from './routes/projects.routes.js'
import inyeccionRoutes from './routes/inyeccion.routes.js';


const app = express(); 

app.use(express.json());

app.use(projectRoutes); 

app.use(inyeccionRoutes)

export default app;