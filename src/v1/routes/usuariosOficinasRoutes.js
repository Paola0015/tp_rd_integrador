import express, { Router } from "express";
import UsuariosOficinasController from "../../controllers/usuariosOficinasController.js";

const router = express.Router();
const usuariosOficinasController = new UsuariosOficinasController();

router.get('/', usuariosOficinasController.buscarTodos);
router.get('/:id', usuariosOficinasController.buscarPorId);
router.delete('/:id', usuariosOficinasController.borrarUsuarioOficina);
router.post('/', usuariosOficinasController.crearUsuarioOficina);
router.patch('/:id', usuariosOficinasController.actualizarUsuarioOficina);

export {router};
