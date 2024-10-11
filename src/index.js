import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';
import path  from 'path';
import { fileURLToPath } from 'url';

// middlewares
import validateContentType from './middlewares/validateContentType.js';

// rutas
import { router as  v1ReclamosEstadoRouter } from './v1/routes/reclamosEstadosRoutes.js';
import { router as v1ReclamosRouter } from './v1/routes/reclamosRoutes.js';
import { router as v1Usuarios } from './v1/routes/usuariosRoutes.js';
import { router as v1UsuariosTipo} from './v1/routes/usuariosTipoRoutes.js'
import { router as v1Oficinas} from './v1/routes/oficinasRoutes.js'

dotenv.config(); //configura las variables de entorno
const PORT = process.env.PUERTO;

const app = express();

app.use(express.json());
app.use(validateContentType);

app.get('/', (req, res) => {
    res.json({'estado':true});
});
//Rutas de los EndPoints
app.use('/v1/reclamos-estados', v1ReclamosEstadoRouter);
app.use('/v1/reclamos', v1ReclamosRouter);
app.use('/v1/usuarios',v1Usuarios);
app.use('/v1/usuariosTipo', v1UsuariosTipo);
app.use('/v1/oficinas', v1Oficinas)

//Config del servidor express
app.listen(PORT, () => {
    console.log(`*** Servidor escuchando en puerto: ${PORT} ***`)
  });
  