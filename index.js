const cors = require('cors');
const express = require('express');
const app = express();
const catalogoCursoRoutes = require('./routes/catalogoCursoRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const materiaRoutes = require('./routes/materiaRoutes');
const actividadRoutes = require('./routes/actividadRoutes');


const { swaggerUi, swaggerSpec } = require('./config/swagger');

// Middleware para interpretar JSON
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', //pegar la url de la app 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
  }));
// Usar las rutas de curso
app.use('/api', catalogoCursoRoutes);
app.use('/api', cursoRoutes);
app.use('/api', materiaRoutes);
app.use('/api', actividadRoutes);



// Configurar Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Puerto en el que el servidor escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log(`Documentación de Swagger disponible en http://localhost:${PORT}/api-docs`);
});
