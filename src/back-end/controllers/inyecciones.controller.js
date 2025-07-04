
import { Inyeccion } from "../models/Inyeccion.js";

export const rutaInicio = async (req, res) => {
    
    res.redirect("../");
    
}

export const inyeccionesList = async (req, res) => {

        try {
        const inyecciones = await Inyeccion.findAll()
        res.render('inyeccion', { data: inyecciones});
        } catch (error) {
            console.log(JSON.stringify(error));
            return res.status(500).json({message: error.message})
        }
 

}

export const renderInyecciones = async (req, res) =>{
               try {
                  const inyecciones = await Inyeccion.findAll()
                  res.render('formato', { data: inyecciones});
                  } catch (error) {
                      console.log(JSON.stringify(error));
                      return res.status(500).json({message: error.message})
                  }
           
      };

export const createInyeccion = async (req, res) => {
  try {
    const {name, time, mes, phone, email} = req.body
    const newInyeccion = await Inyeccion.create({
        name,
        mes,
        time,
        phone,
        email

    })
    console.log(newInyeccion)
    res.redirect("/");
    res.send('Creating Inyección')
  } catch (error) {
    return res.status(500).json({message: error.message})
  }


}

export const editInyeccion = async (req, res) => {

     try {
            const { id } = req.params;
            const inyeccion = await Inyeccion.findByPk(id)
            res.render('inyeccion_edit', {
            data: inyeccion});
            
            
            // res.render("inyeccion_edit", { 
            //     data: inyeccion[0] });

              
            
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
}

export const updateInyeccion = async (req, res) => {
 try {
    const { id } = req.params;
    const {name, mes, time, phone, email} = req.body
    
    const inyeccion = await Inyeccion.findByPk(id)
    inyeccion.name = name
    inyeccion.mes = mes
    inyeccion.time = time
    inyeccion.phone = phone
    inyeccion.email = email

    await inyeccion.save()
    
    res.redirect("/");
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

    res.redirect("/");


} catch (error) {
     return res.status(500).json({message: error.message})
}
}

