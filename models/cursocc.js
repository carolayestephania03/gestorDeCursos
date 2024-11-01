// models/cursoCC.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CursoCC extends Model {
    static associate(models) {
      // Cambia 'Catalogo' por el nombre correcto del alias utilizado
      CursoCC.belongsTo(models.CatalogoCursoCC, {
        foreignKey: 'ID_Catalogo',
        as: 'CatalogoCurso' // Este es el alias que deberías usar al hacer la consulta
      });
      CursoCC.hasMany(models.MateriaCC, {
        foreignKey: 'ID_Curso',
        as: 'Materias' // Alias para las materias, si lo usas en las consultas
      });
    }
  }
  CursoCC.init({
    ID_Curso: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre_Curso: DataTypes.STRING,
    Descripcion_Curso: DataTypes.TEXT,
    ID_Catalogo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CursoCC',
  });
  return CursoCC;
};
