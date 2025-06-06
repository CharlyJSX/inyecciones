import { Login } from "../models/login.model.js"
 

export const loginController = async (req, res) => {
  try {
    const { nickname, pass } = req.body;

    // Buscar el usuario en la base de datos
    const user = await Login.findOne({
      where: {
        nickname: nickname,
        pass: pass,
      },
    });

    // Si no se encuentra el usuario, devolver error
    if (!user) {
      return res.status(402).json({
        success: false,
        message: 'Usuario o contraseña incorrectos',
      });
    }

    // Si el usuario se encuentra, devolver éxito
    return res.status(200).json({
      success: true,
      message: 'Inicio de sesión exitoso',
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

