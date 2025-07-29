import express from "express";
import { registerUser } from "../controllers/register_controller.js";
import { validateToken } from "../middleware/authValidation.js";

export const register = express.Router();

register.post("/register",  registerUser);
