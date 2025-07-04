import { Inyeccion } from "../models/Inyeccion.js";
import { sendInjectionReminder } from '../utils/utilMail.js';

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
    // Validación de teléfono: solo 8 dígitos numéricos
    if (!/^[0-9]{8}$/.test(phone)) {
      return res.status(400).send('El número de teléfono debe tener exactamente 8 dígitos numéricos.');
    }
    const newInyeccion = await Inyeccion.create({
        name,
        mes,
        time,
        phone,
        email
    })
    // Programar el recordatorio por correo
    if (email && mes && time) {
      // Calcular fecha de la próxima inyección
      const fechaBase = new Date(time);
      const dias = parseInt(mes) * 30;
      const fechaRecordatorio = new Date(fechaBase.getTime() + dias * 24 * 60 * 60 * 1000);
      const ahora = new Date();
      const msHastaRecordatorio = fechaRecordatorio.getTime() - ahora.getTime();
      if (msHastaRecordatorio > 0) {
        setTimeout(() => {
          sendInjectionReminder({
            email,
            name,
            nextDate: fechaRecordatorio.toLocaleDateString()
          });
        }, msHastaRecordatorio);
        console.log(`Recordatorio programado para ${email} en ${msHastaRecordatorio / 1000 / 60 / 60 / 24} días`);
      }
    }
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

