//modulos para importar agregar en el package.json "type": "module"
import express from 'express';
import dotenv from 'dotenv'; //para utilizar variables de entorno
import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config(); //configura las variables de entorno desde .env

const PORT = process.env.PUERTO;
const app = express();

//Midlewares
app.use(express.json());//procesa el body del req


//Rutas - EndPoint's
app.get('/', (req, res) => {
  res.status(200).json({'Estado':true })
})



//Config del servidor express
app.listen(PORT, () => {
    console.log(`*** Servidor escuchando en puerto: ${PORT} ***`)
  });
  