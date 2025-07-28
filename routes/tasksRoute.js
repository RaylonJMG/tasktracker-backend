import express from "express";
import {
	deleteTasks,
	getTasks,
	getTasksById,
	postTasks,
	putTasks,
} from "../controllers/tasks_controller.js";
import { validateToken } from "../middleware/authValidation.js";

export const tasks = express.Router();

tasks.get("/tasks", validateToken, getTasks);
tasks.get("/tasks/:task_id", validateToken, getTasksById);
tasks.post("/tasks", validateToken, postTasks);
tasks.put("/tasks/:task_id", validateToken, putTasks);
tasks.delete("/tasks/:task_id", validateToken, deleteTasks);
