// controllers/materiaController.js
const { MateriaCC,CursoCC } = require('../models');

const materiaController = {
  async getAll(req, res) {
    try {
      const materias = await MateriaCC.findAll({
        include: [{ model: CursoCC, as: 'Curso'}] // Incluyendo el curso relacionado
      });
      res.status(200).json(materias);
    } catch (error) {
      console.error('Error al obtener las materias:', error);
      res.status(500).json({ error: 'Error al obtener las materias', details: error.message });
    }
  },

  async getById(req, res) {
    const { id } = req.params;
    try {
      const materia = await MateriaCC.findByPk(id, {
        include: [{ model: CursoCC, as: 'Curso' }]
      });
      if (!materia) {
        return res.status(404).json({ error: 'Materia no encontrada' });
      }
      res.status(200).json(materia);
    } catch (error) {
      console.error('Error al obtener la materia:', error);
      res.status(500).json({ error: 'Error al obtener la materia', details: error.message });
    }
  },

  async create(req, res) {
    try {
      const nuevaMateria = await MateriaCC.create(req.body);
      res.status(201).json(nuevaMateria);
    } catch (error) {
      console.error('Error al crear la materia:', error);
      res.status(500).json({ error: 'Error al crear la materia', details: error.message });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    try {
      const [updated] = await MateriaCC.update(req.body, {
        where: { ID_Materia: id }
      });
      if (updated) {
        const updatedMateria = await MateriaCC.findByPk(id);
        return res.status(200).json(updatedMateria);
      }
      throw new Error('Materia no encontrada');
    } catch (error) {
      console.error('Error al actualizar la materia:', error);
      res.status(500).json({ error: 'Error al actualizar la materia', details: error.message });
    }
  },

  async delete(req, res) {
    const { id } = req.params;
    try {
      const deleted = await MateriaCC.destroy({
        where: { ID_Materia: id }
      });
      if (deleted) {
        return res.status(204).send();
      }
      throw new Error('Materia no encontrada');
    } catch (error) {
      console.error('Error al eliminar la materia:', error);
      res.status(500).json({ error: 'Error al eliminar la materia', details: error.message });
    }
  }
};

module.exports = materiaController;
