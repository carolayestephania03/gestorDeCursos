'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActividadCC extends Model {
    static associate(models) {
      ActividadCC.belongsTo(models.MateriaCC, {
        foreignKey: 'ID_Materia'
      });
    }
  }
  ActividadCC.init({
    ID_Actividad: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Descripcion_Actividad: DataTypes.TEXT,
    Fecha_Entrega: DataTypes.DATE,
    ID_Materia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ActividadCC',
  });
  return ActividadCC;
};
