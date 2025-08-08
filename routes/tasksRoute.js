import express from "express";
import {
	deleteTasks,
	getTasksById,
	postTasks,
	postTasksById,
	putTasks,
} from "../controllers/tasks_controller.js";
import { validateToken } from "../middleware/authValidation.js";

export const tasks = express.Router();

//CREATE TASKS
tasks.post("/tasks", validateToken, postTasks);
//CREATE TASKS BY EMPLOYEE ID
tasks.post("/tasks/:employee_id", validateToken, postTasksById);
//GET TASKS BY EMPLOYEE ID
tasks.get("/tasks/:employee_id", validateToken, getTasksById);
//UPDATE TASKS
tasks.put("/tasks/:tasks_id", validateToken, putTasks);
//DELETE TASKS
tasks.delete("/tasks/:tasks_id", validateToken, deleteTasks);
