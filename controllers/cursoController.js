const { CursoCC, CatalogoCursoCC } = require('../models');

module.exports = {
  // Obtener todos los cursos
  // controllers/cursoController.js
  async getAll(req, res) {
    try {
      const cursos = await CursoCC.findAll({
        include: [
          {
            model: CatalogoCursoCC,
            as: 'CatalogoCurso' // Asegúrate de que este alias coincida con el que definiste
          }
        ]
      });
      res.status(200).json(cursos);
    } catch (error) {
      console.error('Error al obtener los cursos:', error); // Mostrar error en consola
      res.status(500).json({ error: 'Error al obtener los cursos', details: error.message });
    }
  },

  // Obtener un curso por ID
  async getById(req, res) {
    try {
      const curso = await CursoCC.findByPk(req.params.id, {
        include: [
          {
            model: CatalogoCursoCC,
            as: 'CatalogoCurso' // Asegúrate de que este alias coincida con el que definiste
          }
        ]
      });
      if (!curso) {
        return res.status(404).json({ error: 'Curso no encontrado' });
      }
      res.status(200).json(curso);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el curso' });
    }
  },

  // Crear un nuevo curso
  async create(req, res) {
    const { Nombre_Curso, Descripcion_Curso, ID_Catalogo } = req.body;
    try {
      const nuevoCurso = await CursoCC.create({
        Nombre_Curso,
        Descripcion_Curso,
        ID_Catalogo
      });
      res.status(201).json(nuevoCurso);
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el curso' });
    }
  },

  // Actualizar un curso existente
  async update(req, res) {
    const { id } = req.params;
    const { Nombre_Curso, Descripcion_Curso, ID_Catalogo } = req.body;
    try {
      const curso = await CursoCC.findByPk(id);
      if (!curso) {
        return res.status(404).json({ error: 'Curso no encontrado' });
      }
      await curso.update({
        Nombre_Curso,
        Descripcion_Curso,
        ID_Catalogo
      });
      res.status(200).json(curso);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el curso' });
    }
  },

  // Eliminar un curso
  async delete(req, res) {
    const { id } = req.params;
    try {
      const curso = await CursoCC.findByPk(id);
      if (!curso) {
        return res.status(404).json({ error: 'Curso no encontrado' });
      }
      await curso.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el curso' });
    }
  }
};
