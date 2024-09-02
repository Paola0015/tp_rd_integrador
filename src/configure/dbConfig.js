//Configuración de conexión a sql local tener en cuenta el user y pass del sql local

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'rd_tp_integrador',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;