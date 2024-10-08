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

dotenv.config();

const app = express();

app.use(express.json());
app.use(validateContentType);

app.get('/', (req, res) => {
    res.json({'estado':true});
});

app.use('/api/v1/reclamos-estados', v1ReclamosEstadoRouter);
app.use('/api/v1/reclamos', v1ReclamosRouter);

//Config del servidor express
app.listen(PORT, () => {
    console.log(`*** Servidor escuchando en puerto: ${PORT} ***`)
  });
  