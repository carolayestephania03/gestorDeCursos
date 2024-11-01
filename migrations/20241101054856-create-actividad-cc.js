'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ActividadCCs', {
      ID_Actividad: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Descripcion_Actividad: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      Fecha_Entrega: {
        type: Sequelize.DATE
      },
      ID_Materia: {
        type: Sequelize.INTEGER,
        references: {
          model: 'MateriaCCs',
          key: 'ID_Materia'
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
    await queryInterface.dropTable('ActividadCCs');
  }
};
