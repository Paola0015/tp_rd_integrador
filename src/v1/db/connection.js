import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createPool({
  host: "localhost",
  user: "integrador",
  password: "TPintegradorProg3&",
  database: "rd_tp_integrador",
});

export default connection;
