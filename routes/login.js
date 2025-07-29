 import express from "express";
 import { loginUser } from "../controllers/login_controller.js";

 export const login = express.Router();

 login.post("/login", loginUser);
