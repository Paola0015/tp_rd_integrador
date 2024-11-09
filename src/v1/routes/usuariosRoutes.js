// usuariosRoutes.js
import express from "express";
import UsuariosController from "../../controllers/usuariosController.js";
import { verifyToken, verifyRole } from "../../middlewares/auth.js"; // Importar middleware

const router = express.Router();
const usuariosController = new UsuariosController();

// Ruta para obtener usuarios con paginación
router.get("/", verifyToken, verifyRole(["admin"]), async (req, res) => {
  const pagina = parseInt(req.query.pagina) || 1; // Página solicitada por el usuario
  const porPagina = parseInt(req.query.porPagina) || 10; // Número de usuarios por página

  try {
    const usuarios = await usuariosController.buscarConPaginacion(
      pagina,
      porPagina
    );
    res.json(usuarios); // Devolvemos los usuarios en formato JSON
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

router.get(
  "/:id",
  verifyToken,
  verifyRole(["admin"]),
  usuariosController.buscarPorId
);
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
