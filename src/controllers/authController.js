import jwt from "jsonwebtoken";
import UsuariosService from "../services/usuariosService.js";

class AuthController {
  constructor() {
    this.service = new UsuariosService();
  }

  login = async (req, res) => {
    const { correoElectronico, contrasenia } = req.body;

    if (!correoElectronico || !contrasenia) {
      return res.status(400).json({ mensaje: "Credenciales faltantes." });
    }

    try {
      const usuario = await this.service.buscarPorCorreo(correoElectronico);

      if (!usuario || usuario.contrasenia !== contrasenia) {
        return res.status(401).json({ mensaje: "Credenciales inválidas." });
      }

      const token = jwt.sign(
        { id: usuario.id, perfil: usuario.perfil },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );

      return res.status(200).json({ token });
    } catch (error) {
      return res
        .status(500)
        .json({ mensaje: "Error en el servidor.", error: error.message });
    }
  };
}

export default AuthController;
