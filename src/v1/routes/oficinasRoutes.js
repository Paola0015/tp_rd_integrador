import express, { Router } from "express";
import OficinasController from "../../controllers/oficinasController.js";

const router = express.Router();
const oficinasController = new OficinasController();

router.get('/', oficinasController.buscarTodos);
router.get('/:id', oficinasController.buscarPorId);
router.delete('/:id',oficinasController.borrarOficina);
router.post('/', oficinasController.crearOficina);

export {router};
