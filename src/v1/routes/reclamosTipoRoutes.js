import express, { Router } from "express";
import ReclamosTipoController from "../../controllers/reclamosTipoController.js";

const router = express.Router();
const reclamosTipoController = new ReclamosTipoController();

router.get('/', reclamosTipoController.buscarTodos);
router.get('/:id', reclamosTipoController.buscarPorId);
router.patch('/:id', reclamosTipoController.actualizarReclamoTipo);
router.post('/', reclamosTipoController.crearReclamoTipo);
router.delete('/:id', reclamosTipoController.borrarReclamoTipo);
export {router};