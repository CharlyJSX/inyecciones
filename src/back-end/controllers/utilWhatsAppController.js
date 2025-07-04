import { Inyeccion } from "../models/Inyeccion";

export const enviarWhatsApp = async () => {
  try {
     const inyecciones = await Inyeccion.findAll()
      res.json(inyecciones);
  } catch (error) {
    return res.status(500).json({message: error.message})
  }
}