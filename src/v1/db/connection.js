import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createPool({
  host: process.env.SERV,
  user: process.env.USUARIO,
  password: process.env.PASS,
  database: process.env.DBNAME,
});

export default connection;
