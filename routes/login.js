import express from "express";
import { authLoginUser } from "../controllers/login_controller.js";

export const login = express.Router();

//CREATE USER LOGIN
login.post("/login", authLoginUser);
