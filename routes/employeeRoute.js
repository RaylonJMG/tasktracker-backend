import express from "express";
import {
	deleteEmployee,
	getEmployee,
	getEmployeeById,
	postEmployee,
	putEmployee,
} from "../controllers/employee_controller.js";
import { validateToken } from "../middleware/authValidation.js";

export const employee = express.Router();

employee.get("/employee", validateToken, getEmployee);
employee.get("/employee/:employee_id", validateToken, getEmployeeById);
employee.post("/employee", validateToken, postEmployee);
employee.put("/employee/:employee_id", validateToken, putEmployee);
employee.delete("/employee/:employee_id", validateToken, deleteEmployee);
