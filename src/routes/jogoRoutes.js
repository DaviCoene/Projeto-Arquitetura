import express from "express"
import JogoController from "../controllers/jogoController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const routes = express.Router();
const jogoController = new JogoController();

/**
 * @swagger
 * tags:
 *   - name: Jogos
 *     description: Endpoints para os jogos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Jogo:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "663ccf1e934d1eab3a4ed27f"
 *         titulo:
 *           type: string
 *           example: "Mario Kart Wii"
 *         descricao:
 *           type: string
 *           example: "Alguma coisa ..."
 *         data_lancamento:
 *           type: Date
 *           example: 2025-04-23
 *         preco:
 *           type: int
 *           example: 25
 *         genero:
 *           type: object
 *           example: { "nome": "Ação" }
 *         plataforma:
 *           type: object
 *           example: { "nome" : "Playstation 2"}
 *     JogoInput:
 *       type: object
 *       required:
 *         - titulo
 *       properties:
 *         titulo:
 *           type: string
 *           example: "Mario Kart Wii"
 *         descricao:
 *           type: string
 *           example: "Alguma coisa ..."
 *         data_lancamento:
 *           type: Date
 *           example: 2025-04-23
 *         preco:
 *           type: int
 *           example: 25
 *         genero:
 *           type: object
 *           example: { "nome": "Ação" }
 *         plataforma:
 *           type: object
 *           example: { "nome" : "Playstation 2"}
 */

/**
 * @swagger
 * /Jogos:
 *   get:
 *     summary: Lista todos os jogos
 *     tags:
 *       - Jogos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Jogo'
 *       401:
 *         description: Não autorizado
 */

routes.get("/Jogos",/*authMiddleware,*/ jogoController.getAllJogo);

/**
 * @swagger
 * /Jogos:
 *   post:
 *     summary: Cria um novo jogo
 *     tags:
 *       - Jogos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JogoInput'
 *     responses:
 *       201:
 *         description: Postagem criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jogo'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 */

routes.post("/Jogos",/*authMiddleware,*/ jogoController.createJogo);

/**
 * @swagger
 * /Jogos/{id}:
 *   get:
 *     summary: Atualiza um jogo pelo ID
 *     tags:
 *       - Jogos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da postagem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JogoInput'
 *     responses:
 *       200:
 *         description: Postagem atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jogo'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Postagem não encontrada
 */

routes.get("/Jogos/:id",/*authMiddleware,*/ jogoController.getJogoById);

/**
 * @swagger
 * /Jogos/{id}:
 *   delete:
 *     summary: Remove um jogo pelo Id
 *     tags:
 *       - Jogos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da postagem
 *     responses:
 *       204:
 *         description: jogo removido com sucesso (sem conteúdo)
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: jogo não encontrado
 */

routes.delete("/Jogos/:id",/*authMiddleware,*/ jogoController.deletedJogo);

/**
 * @swagger
 * /Jogos/{id}:
 *   put:
 *     summary: Atualiza um jogo pelo ID
 *     tags:
 *       - Jogos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         titulo: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da postagem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JogoInput'
 *     responses:
 *       200:
 *         description: Postagem atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Jogo'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Postagem não encontrada
 */

routes.put("/Jogos/:id",/*authMiddleware,*/ jogoController.updateJogo);


export default routes;


