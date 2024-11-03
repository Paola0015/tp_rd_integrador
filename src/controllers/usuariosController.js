import UsuariosService from "../services/usuariosService.js";

class UsuariosController {
  constructor() {
    this.service = new UsuariosService();
  }

  crearUsuario = async (req, res) => {
    try {
      const nuevoUsuario = req.body;

      // Validación
      if (
        !nuevoUsuario.nombre ||
        !nuevoUsuario.apellido ||
        !nuevoUsuario.correoElectronico ||
        !nuevoUsuario.contrasenia ||
        !nuevoUsuario.idTipoUsuario
      ) {
        return res.status(400).json({
          mensaje:
            "Faltan datos obligatorios: nombre, apellido, correo, contraseña o tipo de usuario.",
        });
      }

      const result = await this.service.crearUsuario(nuevoUsuario);
      return res.status(201).json(result);
    } catch (error) {
      res.status(500).json({
        estado: "Falla",
        mensaje: "Error interno en servidor.",
        error: error.message,
      });
    }
  };

  buscarTodos = async (req, res) => {
    try {
      const usuarios = await this.service.buscarTodos();
      res.status(200).json(usuarios);
    } catch (error) {
      res
        .status(500)
        .json({
          estado: "Falla",
          mensaje: "Error interno en el servidor.",
          error: error.message,
        });
    }
  };

  buscarPorId = async (req, res) => {
    try {
      const usuario = await this.service.buscarPorId(req.params.id);
      if (!usuario) {
        return res
          .status(404)
          .json({ estado: "Falla", mensaje: "Usuario no encontrado." });
      }
      res.status(200).json(usuario);
    } catch (error) {
      res
        .status(500)
        .json({
          estado: "Falla",
          mensaje: "Error interno en el servidor.",
          error: error.message,
        });
    }
  };

  actualizarUsuario = async (req, res) => {
    try {
      const usuarioActualizado = await this.service.actualizarUsuario(
        req.params.id,
        req.body
      );
      if (!usuarioActualizado) {
        return res
          .status(404)
          .json({ estado: "Falla", mensaje: "Usuario no encontrado." });
      }
      res.status(200).json(usuarioActualizado);
    } catch (error) {
      res
        .status(500)
        .json({
          estado: "Falla",
          mensaje: "Error interno en el servidor.",
          error: error.message,
        });
    }
  };

  borrarUsuario = async (req, res) => {
    try {
      const resultado = await this.service.borrarUsuario(req.params.id);
      if (!resultado) {
        return res
          .status(404)
          .json({ estado: "Falla", mensaje: "Usuario no encontrado." });
      }
      res
        .status(200)
        .json({ estado: "OK", mensaje: "Usuario borrado correctamente." });
    } catch (error) {
      res
        .status(500)
        .json({
          estado: "Falla",
          mensaje: "Error interno en el servidor.",
          error: error.message,
        });
    }
  };
}

export default UsuariosController;
