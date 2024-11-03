import express from 'express';

import ReclamosController from '../../controllers/reclamosController.js';

const router = express.Router();

const reclamosController = new ReclamosController();

router.get('/', reclamosController.buscarTodos);
router.get('/:id', reclamosController.buscarPorId);
router.post('/', reclamosController.crear);
// router.patch('/:idReclamo', reclamosController.modificar);


export {router}; 