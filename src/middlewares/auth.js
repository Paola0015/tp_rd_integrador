import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ mensaje: "No se proporcionó un token." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: "Token inválido o expirado." });
  }
};

export const verifyRole = (rolesPermitidos) => {
  return (req, res, next) => {
    const { perfil } = req.user;

    if (!rolesPermitidos.includes(perfil)) {
      return res
        .status(403)
        .json({
          mensaje: "Acceso denegado. No tienes permiso para esta acción.",
        });
    }

    next();
  };
};
