import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const conexion = await mysql.createConnection({
  host: "localhost",
  user: "integrador",
  database: "rd_tp_integrador",
  password: "TPintegradorProg3&",
});

console.log(".oO( Conexión a la DB exitosa! )Oo.\n");
