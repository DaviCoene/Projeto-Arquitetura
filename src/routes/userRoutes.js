import express from "express"
import UserController from "../controllers/userController.js"

const routes = express.Router();

routes.get("/user", UserController.getAllUser);
routes.post("/user", UserController.createUser);
routes.put("/user/:id", UserController.updateUser);

routes.get("/user/:id", UserController.getUserById);
routes.delete("/user/:id", UserController.deletedUser);

export default routes;


