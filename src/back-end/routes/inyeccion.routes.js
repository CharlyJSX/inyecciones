import { Router } from 'express';
import {inyeccionesList, renderInyecciones, createInyeccion, updateInyeccion, deleteInyeccion, editInyeccion} from "../controllers/inyecciones.controller.js"
import { loginController } from '../controllers/login.controller.js'


const router = Router();

// inyeccionRoutes.get('/', inyeccionesList)
router.get('/', renderInyecciones)



router.get('/inyeccion', (req, res) => {
    res.send("Hello World")  
    // res.render('inyeccion', inyeccionesList);
    });
router.get('/inyeccionesEdit/:id', editInyeccion)
// inyeccionRoutes.get('/inyecciones', getInyecciones)
router.post('/inyeccionesSave', createInyeccion)
router.post('/inyeccionesUpdate/:id', updateInyeccion)
router.get('/inyeccionesDelete/:id', deleteInyeccion)
// inyeccionRoutes.get('/inyecciones/:id', getInyeccion)
router.get('/inicio', (req, res) => {
    res.send("Hello World")});


// Login

router.get('/ingresar', loginController)
router.post('/ingresar', loginController)

//inyeccionRoutes.get('/inyeccion', (req, res) => {
  //  res.render("inyeccion");
    
// });

export default router;

