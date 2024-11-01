// models/catalogoCursoCC.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CatalogoCursoCC extends Model {
    static associate(models) {
      CatalogoCursoCC.hasMany(models.CursoCC, {
        foreignKey: 'ID_Catalogo',
        as: 'Cursos' // Alias para las asociaciones de cursos
      });
    }
  }
  CatalogoCursoCC.init({
    ID_Catalogo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Tipo: DataTypes.STRING,
    Descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CatalogoCursoCC',
  });
  return CatalogoCursoCC;
};
