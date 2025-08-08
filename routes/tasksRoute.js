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
//GET TASKS BY EMPLOYEE ID
tasks.get("/tasks/:employee_id", validateToken, getTasksById);
//UPDATE TASKS
tasks.put("/tasks/:tasks_id", validateToken, putTasks);
//DELETE TASKS
tasks.delete("/tasks/:tasks_id", validateToken, deleteTasks);
