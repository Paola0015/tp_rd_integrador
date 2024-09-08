//modulos para importar agregar en el package.json "type": "module"
import express from 'express';
import dotenv from 'dotenv'; //para utilizar variables de entorno
import nodemailer from 'nodemailer';

dotenv.config(); //configra las variables de entorno desde .env

const PORT = process.env.PUERTO;
const app = express();

//Midlewares

//Rutas
app.get('/', (req, res) => {
    res.status(200).json({'Estado':true })
  })

//Confiración del servidor express
app.listen(PORT, () => {
    console.log(`*** Servidor escuchando en puerto: ${PORT} ***`)
  });
  