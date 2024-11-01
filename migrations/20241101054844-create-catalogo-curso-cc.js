'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CatalogoCursoCCs', {
      ID_Catalogo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Tipo: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      Descripcion: {
        type: Sequelize.STRING(100),
        allowNull: false
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
    await queryInterface.dropTable('CatalogoCursoCCs');
  }
};
