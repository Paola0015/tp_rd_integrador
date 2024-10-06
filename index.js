//modulos para importar agregar en el package.json "type": "module"
import express from 'express';
import dotenv from 'dotenv'; //para utilizar variables de entorno
import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config(); //configra las variables de entorno desde .env

const PORT = process.env.PUERTO;
const app = express();


//Midlewares
app.use(express.json());//procesa el body del req


//Rutas - EndPoint's
app.get('/', (req, res) => {
  res.status(200).json({'Estado':true })
})

app.post('/notificacion',(req, res) =>{
    const correoDestino = (req.body.correoElectronico);
    const filename = fileURLToPath(import.meta.url); //ruta del index,js
    const dir = path.dirname(`${filename}`); //ruta del directorio de index.js
    const plantilla = fs.readFileSync(path.join(dir + '/utils/handlebars/plantillaMail.hbs'),'utf-8');
    
    const template = Handlebars.compile(plantilla);
    const datos = {
      nombre : 'Maxi',
      reclamo :'12345'
    }
    const correoHtml = template(datos);

    const transporter = nodemailer.createTransport(
      {
        service :'gmail',
        auth: {
          user: process.env.CORREO,
          pass: process.env.CLAVE
        }
      });
      const mailOptions = {
        from: '',
        to: 'maxi.kildoff@gmail.com',
        subject: 'Prueba de envio Mail api servidor express',
        html: correoHtml
      }

      transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
          console.log("Error al mandar mail", error);
        }else{
          console.log("Mail enviado con exito!", info.response)
        }
      });
      res.send(true);
})


//Config del servidor express
app.listen(PORT, () => {
    console.log(`*** Servidor escuchando en puerto: ${PORT} ***`)
  });
  