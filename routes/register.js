import express from "express";
import { registerUser } from "../controllers/register_controller.js";

export const register = express.Router();

register.post("/register", registerUser);
