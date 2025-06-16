import express from "express";
import GeneroController from "../controllers/generoController.js";

const routes = express.Router();
const generoController = new GeneroController();
/**
 * @swagger
 * tags:
 *   - name: Gêneros
 *     description: Endpoints para os gêneros
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Genero:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "663ccf1e934d1eab3a4ed27f"
 *         nome:
 *           type: string
 *           example: "Aventura"
 *
 *     GeneroInput:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         nome:
 *           type: string
 *           example: "Ação"
 */

/**
 * @swagger
 * /Generos:
 *   get:
 *     summary: Lista todos os gêneros
 *     tags:
 *       - Gêneros
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de gêneros retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genero'
 *       401:
 *         description: Não autorizado
 */
routes.get("/Generos",/*authMidlleware,*/ generoController.getAllGenero);

/**
 * @swagger
 * /Generos:
 *   post:
 *     summary: Cria um novo gênero
 *     tags:
 *       - Gêneros
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GeneroInput'
 *     responses:
 *       201:
 *         description: Gênero criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genero'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 */
routes.post("/Generos",/*authMidlleware,*/ generoController.createGenero);

/**
 * @swagger
 * /Generos/{id}:
 *   get:
 *     summary: Busca um gênero pelo ID
 *     tags:
 *       - Gêneros
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do gênero
 *     responses:
 *       200:
 *         description: Gênero retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genero'
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Gênero não encontrado
 */
routes.get("/Generos/:id",/*authMidlleware,*/ generoController.getGeneroById);

/**
 * @swagger
 * /Generos/{id}:
 *   delete:
 *     summary: Remove um gênero pelo ID
 *     tags:
 *       - Gêneros
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do gênero
 *     responses:
 *       204:
 *         description: Gênero removido com sucesso (sem conteúdo)
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Gênero não encontrado
 */
routes.delete("/Generos/:id",/*authMidlleware,*/ generoController.deleteGenero);

/**
 * @swagger
 * /Generos/{id}:
 *   put:
 *     summary: Atualiza um gênero pelo ID
 *     tags:
 *       - Gêneros
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do gênero
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/GeneroInput'
 *     responses:
 *       200:
 *         description: Gênero atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Genero'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Gênero não encontrado
 */
routes.put("/Generos/:id",/*authMidlleware,*/ generoController.updateGenero);


/**
 * @swagger
 * /Generos/search/{name}:
 *   get:
 *     summary: Busca Generos por nome
 *     tags: 
 *       - Gêneros
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome do genero
 *     responses:
 *       200:
 *         description: Lista de generos encontrados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Genero'
 */

routes.get("/Generos/search/:name", /*authMidlleware,*/ generoController.searchGeneroByName);



export default routes;
