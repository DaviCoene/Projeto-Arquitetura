import express from "express";
import jogo from "./jogoRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send
    ("Node.js com Express"));    

    app.use(express.json(), jogo)
}

export default routes;