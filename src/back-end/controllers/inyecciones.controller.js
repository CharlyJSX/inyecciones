
import { Inyeccion } from "../models/Inyeccion.js";

export const getInyecciones = async (req, res) =>{
    
        try {
        const inyeccion = await Inyeccion.findAll()
        res.json(inyeccion)
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
 
       
}
export const createInyeccion = async (req, res) => {
  try {
    const {name, time} = req.body
    const newInyeccion = await Inyeccion.create({
        name,
        time
    })
    console.log(newInyeccion)
    res.send('Creating Inyección')
  } catch (error) {
    return res.status(500).json({message: error.message})
  }


}

export const updateInyeccion = async (req, res) => {
 try {
    const { id } = req.params;
    const {name,time} = req.body
    
    const Inyeccion = await Inyeccion.findByPk(id)
    project.name = name
    project.time = time
    await Inyeccion.save()
    res.json(Inyeccion)
 } catch (error) {
    return res.status(500).json({message: error.message});
 }
}

export const deleteInyeccion = async (req, res) => {
    try {
        const { id } = req.params;
        await Inyeccion.destroy({
            where: {
                id,
    }})
        
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
    export const getInyeccion = async (req, res) =>{
        res.send("Obteniendo Inyección");
        
        
        try {
            const { id } = req.params;
            const Inyeccion = await Inyeccion.findAll(id)
            res.json(Inyeccion)
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
           
    }
