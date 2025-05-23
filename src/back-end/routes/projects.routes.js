import { Router } from "express";
import { createProjects, deleteProjects, getProjects, updateProjects, getProject } from "../controllers/projects.controller.js";

const projectRoutes = Router();

projectRoutes.get('/projects', getProjects)
projectRoutes.post('/projects', createProjects)
projectRoutes.put('/projects/:id', updateProjects)
projectRoutes.delete('/projects/:id', deleteProjects)
projectRoutes.get('/projects/:id', getProject)

export default projectRoutes; 