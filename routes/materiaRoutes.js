const express = require('express');
const materiaController = require('../controllers/materiaController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Materia
 *   description: Operaciones relacionadas con las materias
 */

/**
 * @swagger
 * /materias:
 *   get:
 *     tags: [Materia]
 *     summary: Obtiene todas las materias
 *     responses:
 *       200:
 *         description: Lista de todas las materias
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Materia'
 *             example: [
 *               {
 *                 "ID_Materia": 1,
 *                 "Nombre_Materia": "Matemáticas",
 *                 "ID_Curso": 1
 *               },
 *               {
 *                 "ID_Materia": 2,
 *                 "Nombre_Materia": "Historia",
 *                 "ID_Curso": 2
 *               }
 *             ]
 */
router.get('/materias', materiaController.getAll);

/**
 * @swagger
 * /materias/{id}:
 *   get:
 *     tags: [Materia]
 *     summary: Obtiene una materia por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Materia encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Materia'
 *             example:
 *               {
 *                 "ID_Materia": 1,
 *                 "Nombre_Materia": "Matemáticas",
 *                 "ID_Curso": 1
 *               }
 *       404:
 *         description: Materia no encontrada
 */
router.get('/materias/:id', materiaController.getById);

/**
 * @swagger
 * /materias:
 *   post:
 *     tags: [Materia]
 *     summary: Crea una nueva materia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Materia'
 *           example:
 *             {
 *               "Nombre_Materia": "Ciencias",
 *               "ID_Curso": 1
 *             }
 *     responses:
 *       201:
 *         description: Materia creada exitosamente
 *       500:
 *         description: Error al crear la materia
 */
router.post('/materias', materiaController.create);

/**
 * @swagger
 * /materias/{id}:
 *   put:
 *     tags: [Materia]
 *     summary: Actualiza una materia existente
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
 *             $ref: '#/components/schemas/Materia'
 *           example:
 *             {
 *               "Nombre_Materia": "Matemáticas Avanzadas",
 *               "ID_Curso": 1
 *             }
 *     responses:
 *       200:
 *         description: Materia actualizada exitosamente
 *       404:
 *         description: Materia no encontrada
 */
router.put('/materias/:id', materiaController.update);

/**
 * @swagger
 * /materias/{id}:
 *   delete:
 *     tags: [Materia]
 *     summary: Elimina una materia
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Materia eliminada exitosamente
 *       404:
 *         description: Materia no encontrada
 */
router.delete('/materias/:id', materiaController.delete);

module.exports = router;
