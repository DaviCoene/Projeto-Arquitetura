import express from "express"
import JogoController from "../controllers/jogoController.js";

const routes = express.Router();

routes.get("/Jogos", JogoController.getAllJogo);
routes.post("/Jogos", JogoController.createJogo);
// routes.get("/Jogos/:id", JogoController.getJogoById);
// routes.get("/Jogos/search/:name", JogoController.searchJogoByName)
// routes.delete("/Jogos/:id", JogoController.deletedJogo);
// routes.put("/Jogos/:id", JogoController.updateJogo);


export default routes;


