import express from "express";
import {
	deleteTasks,
	getTasks,
	postTasks,
	putTasks,
} from "../controllers/tasks_controller.js";
import { validateToken } from "../middleware/authValidation.js";

export const tasks = express.Router();

tasks.get("/tasks", validateToken, getTasks);
tasks.post("/tasks", validateToken, postTasks);
tasks.put("/tasks/:task_id", validateToken, putTasks);
tasks.delete("/tasks/:task_id", validateToken, deleteTasks);
