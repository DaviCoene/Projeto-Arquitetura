import express from "express";
import post from "./postRoutes.js"
import authors from "./authorRoutes.js";
import user from "./userRoutes.js"
const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send
    ("Node.js com Express"));    

    app.use(express.json(), post, authors, user)
}
 




export default routes;