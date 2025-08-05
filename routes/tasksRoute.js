import express from "express";
import {
	deleteTasks,
	getEmployeeTasks,
	getTasksById,
	postTasks,
	putTasks,
} from "../controllers/tasks_controller.js";
import { validateToken } from "../middleware/authValidation.js";

export const tasks = express.Router();

//CREATE TASKS
tasks.post("/tasks", validateToken, postTasks);
//GET ALL TASKS
tasks.get("/tasks", validateToken, getTasksById);
//GET TASKS BY EMPLOYEE ID
tasks.get("/tasks/:employee_id", validateToken, getEmployeeTasks);
//UPDATE TASKS
tasks.put("/tasks/:task_id", validateToken, putTasks);
//DELETE TASKS
tasks.delete("/tasks/:task_id", validateToken, deleteTasks);
