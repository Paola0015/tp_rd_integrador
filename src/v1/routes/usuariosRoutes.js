import express, { Router } from "express";
import UsuariosController from "../../controllers/usuariosController.js";


const router = express.Router();
const usuariosController = new UsuariosController();

router.get ('/', usuariosController.buscarTodos);
router.get ('/:id', usuariosController.buscarPorId);
router.delete ('/:id',usuariosController.borrarUsuario);
router.post('/', usuariosController.crearUsuario);
router.patch('/:id', usuariosController.actualizarUsuario);

export {router};