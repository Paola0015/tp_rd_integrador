import express, { Router } from "express";
import UsuariosTipoController from "../../controllers/usuariosTipoController.js";

const router = express.Router();
const usuariosTipoController = new UsuariosTipoController();

router.get('/', usuariosTipoController.buscarTodos);
router.get('/:id', usuariosTipoController.buscarPoId);
router.patch('/:id',usuariosTipoController.actualizarUsuariosTipo)
router.post('/', usuariosTipoController.crearUsuarioTipo)
router.delete('/:id', usuariosTipoController.borrarUsuarioTipo)

export {router};


