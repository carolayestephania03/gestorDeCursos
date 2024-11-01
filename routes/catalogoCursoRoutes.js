const express = require('express');
const catalogoCursoController = require('../controllers/catalogoCursoController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CatalogoCurso
 *   description: Operaciones relacionadas con el catálogo de cursos
 */

/**
 * @swagger
 * /catalogos:
 *   get:
 *     tags: [CatalogoCurso]
 *     summary: Obtiene todos los catálogos de cursos
 *     responses:
 *       200:
 *         description: Lista de todos los catálogos de cursos con sus cursos asociados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CatalogoCurso'
 *             example: [
 *               {
 *                 "ID_Catalogo": 1,
 *                 "Tipo": "Ciencias Exactas",
 *                 "Descripcion": "Catálogo de cursos de ciencias exactas",
 *                 "Cursos": [
 *                   {
 *                     "ID_Curso": 1,
 *                     "Nombre_Curso": "Matemáticas",
 *                     "Descripcion_Curso": "Curso de matemáticas avanzadas",
 *                     "ID_Catalogo": 1
 *                   }
 *                 ]
 *               },
 *               {
 *                 "ID_Catalogo": 2,
 *                 "Tipo": "Ciencias Sociales",
 *                 "Descripcion": "Catálogo de cursos de ciencias sociales",
 *                 "Cursos": [
 *                   {
 *                     "ID_Curso": 2,
 *                     "Nombre_Curso": "Historia",
 *                     "Descripcion_Curso": "Curso de historia mundial",
 *                     "ID_Catalogo": 2
 *                   }
 *                 ]
 *               }
 *             ]
 */
router.get('/catalogos', catalogoCursoController.getAll);

module.exports = router;
