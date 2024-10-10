import express, { Router } from "express";
import UsuariosTipoController from "../../controllers/usuariosTipoController.js";

const router = express.Router();
const usuariosTipoController = new UsuariosTipoController();

router.get('/', usuariosTipoController.buscarTodos);

export {router};


