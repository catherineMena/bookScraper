// insertarLibros.js
const getConnection = require('./connection');
const obtenerLibros = require('./librosScraper');

(async () => {
  const db = await getConnection();
  const libros = await obtenerLibros();

  for (const libro of libros) {
    await db.query(
      'INSERT INTO libros (titulo, precio, rating, genero) VALUES (?, ?, ?, ?)',
      [libro.titulo, libro.precio, libro.rating, libro.genero]
    );
  }

  console.log(`${libros.length} libros insertados correctamente`);
  process.exit();
})();
