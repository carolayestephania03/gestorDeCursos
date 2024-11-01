const express = require('express');
const cursoController = require('../controllers/cursoController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Curso
 *   description: Operaciones relacionadas con los cursos
 */

/**
 * @swagger
 * /cursos:
 *   get:
 *     tags: [Curso]
 *     summary: Obtiene todos los cursos
 *     responses:
 *       200:
 *         description: Lista de todos los cursos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Curso'
 *             example: [
 *               {
 *                 "ID_Curso": 1,
 *                 "Nombre_Curso": "Matemáticas",
 *                 "Descripcion_Curso": "Curso de matemáticas avanzadas",
 *                 "ID_Catalogo": 1
 *               },
 *               {
 *                 "ID_Curso": 2,
 *                 "Nombre_Curso": "Historia",
 *                 "Descripcion_Curso": "Curso de historia mundial",
 *                 "ID_Catalogo": 2
 *               }
 *             ]
 */
router.get('/cursos', cursoController.getAll);

/**
 * @swagger
 * /cursos/{id}:
 *   get:
 *     tags: [Curso]
 *     summary: Obtiene un curso por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Curso encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Curso'
 *             example:
 *               {
 *                 "ID_Curso": 1,
 *                 "Nombre_Curso": "Matemáticas",
 *                 "Descripcion_Curso": "Curso de matemáticas avanzadas",
 *                 "ID_Catalogo": 1
 *               }
 *       404:
 *         description: Curso no encontrado
 */
router.get('/cursos/:id', cursoController.getById);

/**
 * @swagger
 * /cursos:
 *   post:
 *     tags: [Curso]
 *     summary: Crea un nuevo curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Curso'
 *           example:
 *             {
 *               "Nombre_Curso": "Ciencias",
 *               "Descripcion_Curso": "Curso de ciencias naturales",
 *               "ID_Catalogo": 1
 *             }
 *     responses:
 *       201:
 *         description: Curso creado exitosamente
 *       500:
 *         description: Error al crear el curso
 */
router.post('/cursos', cursoController.create);

/**
 * @swagger
 * /cursos/{id}:
 *   put:
 *     tags: [Curso]
 *     summary: Actualiza un curso existente
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
 *             $ref: '#/components/schemas/Curso'
 *           example:
 *             {
 *               "Nombre_Curso": "Matemáticas Aplicadas",
 *               "Descripcion_Curso": "Curso de matemáticas aplicadas",
 *               "ID_Catalogo": 1
 *             }
 *     responses:
 *       200:
 *         description: Curso actualizado exitosamente
 *       404:
 *         description: Curso no encontrado
 */
router.put('/cursos/:id', cursoController.update);

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     tags: [Curso]
 *     summary: Elimina un curso
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Curso eliminado exitosamente
 *       404:
 *         description: Curso no encontrado
 */
router.delete('/cursos/:id', cursoController.delete);

module.exports = router;
