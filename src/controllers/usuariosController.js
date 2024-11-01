export const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = req.body;

    // Validacion de campos
    if (
      !nuevoUsuario.nombre ||
      !nuevoUsuario.apellido ||
      !nuevoUsuario.correoElectronico ||
      !nuevoUsuario.contrasenia ||
      !nuevoUsuario.idTipoUsuario
    ) {
      return res
        .status(400)
        .json({
          mensaje:
            "Faltan datos obligatorios: nombre, apellido, correo, contraseña o tipo de usuario.",
        });
    }

    // creo usuario
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
