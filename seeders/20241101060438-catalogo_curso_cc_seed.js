'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const catalogoCursos = [
      {
        
        Tipo: 'Curso',
        Descripcion: 'Obligatorio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        
        Tipo: 'Curso',
        Descripcion: 'Optativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: 'Materia',
        Descripcion: 'Obligatorio',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        Tipo: 'Actividad',
        Descripcion: 'Extracurricular',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    // Solo insertar si la tabla CatalogoCursoCC está vacía
    const existingCatalogoCursos = await queryInterface.sequelize.query(
      'SELECT * FROM "CatalogoCursoCCs"'
    );

    if (existingCatalogoCursos[0].length === 0) {
      await queryInterface.bulkInsert('CatalogoCursoCCs', catalogoCursos);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CatalogoCursoCCs', null, {});
  }
};
