
import { Login } from "../models/login.model.js";


export const loginController = async (req, res) => {
 res.render('login');

// try {
 
// const { nickname, pass } = req.body;


//   Buscar el usuario en la base de datos
// const user = await Login.findOne({
//      where: {
//        nickname: nickname,
//        pass: pass,
//      },
//    });

//   Si no se encuentra la suaria, devolver error
//    if (!user) {
      
//      return res.status(402).json({
//       success: false,
//        message: 'Usuaria o contraseña incorrectos',
//      });
//    }else{
//   Si la usuaria se encuentra, devolver éxito
   
//    };
//  res.redirect("/");
//  } catch (error) {
//    return res.status(500).json({ message: error.message });
//  };

};

