'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MateriaCCs', {
      ID_Materia: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nombre_Materia: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      ID_Curso: {
        type: Sequelize.INTEGER,
        references: {
          model: 'CursoCCs',
          key: 'ID_Curso'
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
    await queryInterface.dropTable('MateriaCCs');
  }
};
