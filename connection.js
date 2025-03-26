const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'mysql-db',


  user: 'root',
  password: 'secret123', // deja vacío si no le pusiste contraseña
  database: 'book_scraper',
  port: 3306
});

module.exports = () => pool;
