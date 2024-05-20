const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express REST API with Swagger',
      version: '1.0.0',
      description: 'Documentation for Express API using Swagger',
    },
  },
  apis: ['./documentation/*.js'],  // File yang berisi definisi route Anda
};

const specs = swaggerJsdoc(options);

module.exports = specs;
