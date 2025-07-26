import express from "express";
import { auth, postUser } from "../controllers/user_controller";

export const user = express.Router();

user.post("/user", postUser);
user.post("/user/auth", auth);
