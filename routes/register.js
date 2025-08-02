import express from "express";
import { registerUser } from "../controllers/register_controller.js";

export const register = express.Router();

//CREATE NEW USER IN REGISTRY
register.post("/register", registerUser);
