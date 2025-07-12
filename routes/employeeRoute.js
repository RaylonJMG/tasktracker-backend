import express from "express";
import {
	deleteEmployee,
	getEmployees,
	postEmployee,
	putEmployee,
} from "../controllers/employee_controller.js";

export const employee = express.Router();

employee.get("/employee", getEmployees);
employee.post("/employee", postEmployee);
employee.put("/employees/:id", putEmployee);
employee.delete("/employees/:id ", deleteEmployee);
