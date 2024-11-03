import express from 'express';

import ReclamosEstadosController from '../../controllers/reclamosEstadosController.js';

const router = express.Router();

const reclamosEstadosController = new ReclamosEstadosController();

router.get('/', reclamosEstadosController.buscarTodos);
router.get('/:id', reclamosEstadosController.buscarPoId);
router.post('/', reclamosEstadosController.crear);
router.patch('/:id', reclamosEstadosController.actualizar);
router.delete('/:id', reclamosEstadosController.borrar);
router.post('/', reclamosEstadosController.crear);

export {router};