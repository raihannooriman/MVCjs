import express from "express";
const routerUser = express.Router();
import { getAllUsers, getUser } from "../controllers/user.js";

routerUser.get("/all", getAllUsers);
routerUser.get("/byId/:id", getUser);

export { routerUser };
