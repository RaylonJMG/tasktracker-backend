import express from "express";
import {
	deleteUser,
	getUser,
	getUserById,
	postUser,
	putUser,
} from "../controllers/user_controller.js";
import { validateToken } from "../middleware/authValidation.js";
import { registerUser } from "../controllers/register_controller.js";
import { loginUser } from "../controllers/login_controller.js";

export const user = express.Router();

user.get("/user", validateToken, getUser);
user.get("/user/:user_id", validateToken, getUserById);
user.post("/user", validateToken, postUser);
user.put("/user/:user_id", validateToken, putUser);
user.delete("/user/:user_id", validateToken, deleteUser);

user.post("/register", validateToken, registerUser);
user.post("/login", validateToken, loginUser);
