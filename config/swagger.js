const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Definir la configuración para Swagger
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Cursos',
    version: '1.0.0',
    description: 'Documentación de la API para gestionar Cursos',
  },
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Servidor local',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Ruta a los archivos de rutas donde usaremos anotaciones Swagger
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
