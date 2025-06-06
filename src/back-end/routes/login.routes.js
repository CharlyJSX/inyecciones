import { Router } from "express";
import { loginController } from "../controllers/login.controller.js";

const loginRoutes = Router();



loginRoutes.post('/login', loginController)
    


export default loginRoutes; 