import mysql from 'mysql2/promise';
import dotenv from 'dotenv'


dotenv.config();

export const conexion = await mysql.createConnection({
    //Configración de la DB
    host: process.env.SERV,
    user: process.env.USUARIO,
    database: process.env.DBNAME,
    password: process.env.PASS,
});

console.log('### Conexión a la DB exitosa! ###')