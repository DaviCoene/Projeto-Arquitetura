import express from "express";
import PlataformaController from "../controllers/plataformaController.js";

const routes = express.Router();
const plataformaController = new PlataformaController();

/**
 * @swagger
 * tags:
 *   - name: Plataformas
 *     description: Endpoints para as plataformas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Plataforma:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "663ccf1e934d1eab3a4ed27f"
 *         nome:
 *           type: string
 *           example: "PlayStation 5"
 *
 *     PlataformaInput:
 *       type: object
 *       required:
 *         - nome
 *       properties:
 *         nome:
 *           type: string
 *           example: "Xbox Series X"
 */

/**
 * @swagger
 * /Plataformas:
 *   get:
 *     summary: Lista todas as plataformas
 *     tags:
 *       - Plataformas
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de plataformas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Plataforma'
 *       401:
 *         description: Não autorizado
 */
routes.get("/Plataformas", plataformaController.getAllPlataforma);

/**
 * @swagger
 * /Plataformas:
 *   post:
 *     summary: Cria uma nova plataforma
 *     tags:
 *       - Plataformas
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PlataformaInput'
 *     responses:
 *       201:
 *         description: Plataforma criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plataforma'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 */
routes.post("/Plataformas", plataformaController.createPlataforma);

/**
 * @swagger
 * /Plataformas/{id}:
 *   get:
 *     summary: Retorna uma plataforma pelo ID
 *     tags:
 *       - Plataformas
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da plataforma
 *     responses:
 *       200:
 *         description: Plataforma retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plataforma'
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Plataforma não encontrada
 */
routes.get("/Plataformas/:id", plataformaController.getPlataformaById);

/**
 * @swagger
 * /Plataformas/{id}:
 *   put:
 *     summary: Atualiza uma plataforma pelo ID
 *     tags:
 *       - Plataformas
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da plataforma
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PlataformaInput'
 *     responses:
 *       200:
 *         description: Plataforma atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Plataforma'
 *       400:
 *         description: Dados inválidos
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Plataforma não encontrada
 */
routes.put("/Plataformas/:id", plataformaController.updatePlataforma);

/**
 * @swagger
 * /Plataformas/{id}:
 *   delete:
 *     summary: Remove uma plataforma pelo ID
 *     tags:
 *       - Plataformas
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da plataforma
 *     responses:
 *       204:
 *         description: Plataforma removida com sucesso (sem conteúdo)
 *       401:
 *         description: Não autorizado
 *       404:
 *         description: Plataforma não encontrada
 */
routes.delete("/Plataformas/:id", plataformaController.deletePlataforma);

export default routes;
