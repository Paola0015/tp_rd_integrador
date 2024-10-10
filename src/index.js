import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// middlewares
import validateContentType from "./middlewares/validateContentType.js";

// rutas
<<<<<<< HEAD
import { router as v1ReclamosEstadoRouter } from "./v1/routes/reclamosEstadosRoutes.js";
import { router as v1ReclamosRouter } from "./v1/routes/reclamosRoutes.js";
import { router as v1Usuarios } from "./v1/routes/usuariosRoutes.js";
import { authRouter } from "./v1/routes/authRoutes.js";
import { router as v1OficinasRouter } from "./v1/routes/oficinasRoutes.js"; // Asegúrate de agregar esto
=======
import { router as  v1ReclamosEstadoRouter } from './v1/routes/reclamosEstadosRoutes.js';
import { router as v1ReclamosRouter } from './v1/routes/reclamosRoutes.js';
import { router as v1Usuarios } from './v1/routes/usuariosRoutes.js';
import {router as v1UsuariosTipo} from './v1/routes/usuariosTipoRoutes.js'
>>>>>>> main

dotenv.config(); //configura las variables de entorno
const PORT = process.env.PUERTO;

const app = express();

app.use(express.json());
app.use(validateContentType);

app.get("/", (req, res) => {
  res.json({ estado: true });
});
//Rutas de los EndPoints
<<<<<<< HEAD
app.use("/v1/reclamos-estados", v1ReclamosEstadoRouter);
app.use("/v1/reclamos", v1ReclamosRouter);
app.use("/v1/usuarios", v1Usuarios);
app.use("/v1/auth", authRouter);
app.use("/v1/oficinas", v1OficinasRouter);
=======
app.use('/v1/reclamos-estados', v1ReclamosEstadoRouter);
app.use('/v1/reclamos', v1ReclamosRouter);
app.use('/v1/usuarios',v1Usuarios);
app.use('/v1/usuariosTipo', v1UsuariosTipo);
>>>>>>> main

//Config del servidor express
app.listen(PORT, () => {
  console.log(`*** Servidor escuchando en puerto: ${PORT} ***`);
});
