import mysql from 'mysql2/promise';

export const conexion = await mysql.createConnection({
    //Configración de la DB
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DBNAME,
    password: process.env.PASS,
});