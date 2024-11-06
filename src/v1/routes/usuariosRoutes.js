import express from "express";
import UsuariosController from "../../controllers/usuariosController.js";
import { verifyToken, verifyRole } from "../../middlewares/auth.js"; // Importar middleware

const router = express.Router();
const usuariosController = new UsuariosController();

// Rutas de usuarios protegidas por autenticación y roles
router.get(
  "/",
  verifyToken,
  verifyRole(["admin"]),
  usuariosController.buscarTodos
);
router.get(
  "/:id",
  verifyToken,
  verifyRole(["admin"]),
  usuariosController.buscarPorId
);
router.delete(
  "/:id",
  verifyToken,
  verifyRole(["admin"]),
  usuariosController.borrarUsuario
);
router.post(
  "/",
  verifyToken,
  verifyRole(["admin"]),
  usuariosController.crearUsuario
);
router.patch(
  "/:id",
  verifyToken,
  verifyRole(["admin"]),
  usuariosController.actualizarUsuario
);

export default router;
