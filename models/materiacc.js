'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MateriaCC extends Model {
    static associate(models) {
      MateriaCC.belongsTo(models.CursoCC, {
        foreignKey: 'ID_Curso',
        as: 'Curso'
      });
      MateriaCC.hasMany(models.ActividadCC, {
        foreignKey: 'ID_Materia'
      });
    }
  }
  MateriaCC.init({
    ID_Materia: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre_Materia: DataTypes.STRING,
    ID_Curso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MateriaCC',
  });
  return MateriaCC;
};
