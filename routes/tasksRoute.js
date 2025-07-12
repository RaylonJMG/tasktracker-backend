import express from "express";
import {
	deleteTasks,
	getTasks,
	postTasks,
	putTasks,
} from "../controllers/tasks_controller.js";

export const tasks = express.Router();

tasks.get("/tasks", getTasks);
tasks.post("/tasks", postTasks);
tasks.put("/taskss/:id", putTasks);
tasks.delete("/taskss/:id ", deleteTasks);
