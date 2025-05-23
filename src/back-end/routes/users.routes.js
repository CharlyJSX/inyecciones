import { Router } from "express";

const router = Router();

router.get('/users', (req, res) => {
    res.send('Obteniendo usuarios')
})


router.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send('Obteniendo la usuaria ' + id)
})

router.post('/users', (req, res) => {
    res.send('Enviando usuaria')
})

router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send('Actualizando la usuaria ' + id)
})

router.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send('Eliminando la usuaria ' + id)
})


export default router;