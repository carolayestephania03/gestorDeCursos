const { ActividadCC,CursoCC } = require('../models');

module.exports = {
  async getAll(req, res) {
    try {
      const actividades = await ActividadCC.findAll();
      res.status(200).json(actividades);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener las actividades",
        details: error.message,
      });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const actividad = await ActividadCC.findByPk(id);
      if (actividad) {
        res.status(200).json(actividad);
      } else {
        res.status(404).json({ error: "Actividad no encontrada" });
      }
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener la actividad",
        details: error.message,
      });
    }
  },

  async create(req, res) {
    try {
      const { Descripcion_Actividad, Fecha_Entrega, ID_Materia } = req.body;
      const nuevaActividad = await ActividadCC.create({
        Descripcion_Actividad,
        Fecha_Entrega,
        ID_Materia,
      });
      res.status(201).json(nuevaActividad);
    } catch (error) {
      res.status(500).json({
        error: "Error al crear la actividad",
        details: error.message,
      });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { Descripcion_Actividad, Fecha_Entrega, ID_Materia } = req.body;
      const actividad = await ActividadCC.findByPk(id);

      if (actividad) {
        actividad.Descripcion_Actividad = Descripcion_Actividad;
        actividad.Fecha_Entrega = Fecha_Entrega;
        actividad.ID_Materia = ID_Materia;
        await actividad.save();
        res.status(200).json(actividad);
      } else {
        res.status(404).json({ error: "Actividad no encontrada" });
      }
    } catch (error) {
      res.status(500).json({
        error: "Error al actualizar la actividad",
        details: error.message,
      });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const actividad = await ActividadCC.findByPk(id);

      if (actividad) {
        await actividad.destroy();
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Actividad no encontrada" });
      }
    } catch (error) {
      res.status(500).json({
        error: "Error al eliminar la actividad",
        details: error.message,
      });
    }
  },
};
