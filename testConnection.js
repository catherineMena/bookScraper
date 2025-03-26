const getConnection = require('./connection');

async function testDB() {
  try {
    const db = await getConnection();
    const [rows] = await db.query('SELECT 1 + 1 AS result');
    console.log('Conexión exitosa:', rows[0]);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

testDB();
