import express from "express";
import {
  crearOficina,
  obtenerOficinas,
  obtenerOficinaPorId,
  actualizarOficina,
  eliminarOficina,
} from "../controllers/oficinasController.js";
import verifyToken from "../../middlewares/authMiddleware.js";

export const router = express.Router();

router.get("/", verifyToken, obtenerOficinas);
router.get("/:id", verifyToken, obtenerOficinaPorId);
router.post("/", verifyToken, crearOficina);
router.put("/:id", verifyToken, actualizarOficina);
router.delete("/:id", verifyToken, eliminarOficina);

export default router;
