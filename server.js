const express = require('express');
const cors = require('cors');
const librosRoutes = require('./librosRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/libros', librosRoutes);
app.use(express.static('public')); // 👈 esto permite cargar tu frontend

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));
