import express from "express";
import {
  actualizarEstadoReclamo,
  cancelarReclamo,
} from "../../controllers/ReclamosController.js";

const router = express.Router();

// Actualizo los reclamos de clientes
router.put("/:id/estado", actualizarEstadoReclamo);

// Cancelp los reclamos
router.put("/:id/cancelar", cancelarReclamo);

export default router;
