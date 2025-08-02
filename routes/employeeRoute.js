import express from "express";
import {
	deleteEmployee,
	getAllEmployees,
	getEmployeeById,
	postEmployee,
	putEmployee,
} from "../controllers/employee_controller.js";
import { validateToken } from "../middleware/authValidation.js";

export const employee = express.Router();

//CREATE EMPLOYEE
employee.post("/employee", validateToken, postEmployee);
//READ ALL EMPLOYEES
employee.get("/employee", validateToken, getAllEmployees);
//READ EMPLOYEE BY ID
employee.get("/employee/:employee_id", validateToken, getEmployeeById);
//UPDATE EMPLOYEE
employee.put("/employee/:employee_id", validateToken, putEmployee);
//DELETE EMPLOYEE
employee.delete("/employee/:employee_id", validateToken, deleteEmployee);
