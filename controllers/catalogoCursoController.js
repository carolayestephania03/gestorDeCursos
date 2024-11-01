const { CatalogoCursoCC } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const catalogos = await CatalogoCursoCC.findAll({
        include: {
          association: 'Cursos', // Incluye los cursos relacionados
        },
      });
      res.status(200).json(catalogos);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener los catálogos de cursos",
        details: error.message,
      });
    }
  },
};
