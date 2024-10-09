import express from "express";
import UsuariosController from "../../controllers/usuariosController.js";


const router = express.Router();
const usuariosController = new UsuariosController();

router.get ('/', usuariosController.buscarTodos);

export {router};