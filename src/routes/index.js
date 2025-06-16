import express from "express";
import jogo from "./jogoRoutes.js"
import authRotes from "./authRoutes.js"
import user from "./userRoutes.js";
import Genero from "./generoRoutes.js";
import plataforma from "./plataformaRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send
    ("Node.js com Express"));    

    app.use(express.json());
    app.use(authRotes);
    app.use(Genero);
    app.use(plataforma);
    app.use(jogo);
    app.use(user);
}

export default routes;
