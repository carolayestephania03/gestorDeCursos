'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CursoCCs', {
      ID_Curso: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre_Curso: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      Descripcion_Curso: {
        type: Sequelize.TEXT
      },
      ID_Catalogo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CatalogoCursoCCs',
          key: 'ID_Catalogo'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CursoCCs');
  }
};
