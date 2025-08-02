import express from "express";
import {
	deleteTasks,
	getAllTasks,
	getTasksById,
	postTasks,
	putTasks,
} from "../controllers/tasks_controller.js";
import { validateToken } from "../middleware/authValidation.js";

export const tasks = express.Router();

//CREATE TASKS
tasks.post("/tasks", validateToken, postTasks);
//GET ALL TASKS
tasks.get("/tasks", validateToken, getAllTasks);
//GET TASKS BY TASK_ID
tasks.get("/tasks/:task_id", validateToken, getTasksById);
//UPDATE TASKS
tasks.put("/tasks/:task_id", validateToken, putTasks);
//DELETE TASKS
tasks.delete("/tasks/:task_id", validateToken, deleteTasks);
