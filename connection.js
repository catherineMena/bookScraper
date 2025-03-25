const mysql = require('mysql2/promise');

let connection;

async function conectarBD() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'cath123',
      database: 'libros_db'
    });
  }
  return connection;
}

module.exports = conectarBD;
