import express from "express";
import usuariosControler from "../../controllers/usuariosControler";


const router = express.Route();
const usuariosControler = new usuariosControler();

router.get ('/', usuariosControler.buscarTodos);

export {router};