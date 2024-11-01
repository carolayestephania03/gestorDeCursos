const express = require('express');
const actividadController = require('../controllers/actividadController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Actividad
 *   description: Operaciones relacionadas con las actividades
 */

/**
 * @swagger
 * /actividades:
 *   get:
 *     tags: [Actividad]
 *     summary: Obtiene todas las actividades
 *     responses:
 *       200:
 *         description: Lista de todas las actividades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Actividad'
 *             example: [
 *               {
 *                 "ID_Actividad": 1,
 *                 "Descripcion_Actividad": "Proyecto final de matemáticas",
 *                 "Fecha_Entrega": "2023-12-01T00:00:00Z",
 *                 "ID_Materia": 1
 *               },
 *               {
 *                 "ID_Actividad": 2,
 *                 "Descripcion_Actividad": "Ensayo de historia",
 *                 "Fecha_Entrega": "2023-12-15T00:00:00Z",
 *                 "ID_Materia": 2
 *               }
 *             ]
 */
router.get('/actividades', actividadController.getAll);

/**
 * @swagger
 * /actividades/{id}:
 *   get:
 *     tags: [Actividad]
 *     summary: Obtiene una actividad por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Actividad encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Actividad'
 *             example:
 *               {
 *                 "ID_Actividad": 1,
 *                 "Descripcion_Actividad": "Proyecto final de matemáticas",
 *                 "Fecha_Entrega": "2023-12-01T00:00:00Z",
 *                 "ID_Materia": 1
 *               }
 *       404:
 *         description: Actividad no encontrada
 */
router.get('/actividades/:id', actividadController.getById);

/**
 * @swagger
 * /actividades:
 *   post:
 *     tags: [Actividad]
 *     summary: Crea una nueva actividad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actividad'
 *           example:
 *             {
 *               "Descripcion_Actividad": "Nuevo proyecto de ciencias",
 *               "Fecha_Entrega": "2023-12-01T00:00:00Z",
 *               "ID_Materia": 1
 *             }
 *     responses:
 *       201:
 *         description: Actividad creada exitosamente
 *       500:
 *         description: Error al crear la actividad
 */
router.post('/actividades', actividadController.create);

/**
 * @swagger
 * /actividades/{id}:
 *   put:
 *     tags: [Actividad]
 *     summary: Actualiza una actividad existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Actividad'
 *           example:
 *             {
 *               "Descripcion_Actividad": "Proyecto de ciencias actualizado",
 *               "Fecha_Entrega": "2023-12-01T00:00:00Z",
 *               "ID_Materia": 1
 *             }
 *     responses:
 *       200:
 *         description: Actividad actualizada exitosamente
 *       404:
 *         description: Actividad no encontrada
 */
router.put('/actividades/:id', actividadController.update);

/**
 * @swagger
 * /actividades/{id}:
 *   delete:
 *     tags: [Actividad]
 *     summary: Elimina una actividad
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Actividad eliminada exitosamente
 *       404:
 *         description: Actividad no encontrada
 */
router.delete('/actividades/:id', actividadController.delete);

module.exports = router;
