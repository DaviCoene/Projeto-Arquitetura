import express from "express";
import post from "./postRoutes.js"
import authors from "./authorRoutes.js";
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send
    ("Node.js com Express"));    

    app.use(express.json(), post, authors)
}





export default routes;