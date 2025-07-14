import express from "express";
import {
	deleteEmployee,
	getEmployee,
	postEmployee,
	putEmployee,
} from "../controllers/employee_controller.js";

export const employee = express.Router();

employee.get("/employee", getEmployee);
employee.post("/employee", postEmployee);
employee.put("/employee/:employee_id", putEmployee);
employee.delete("/employee/:employee_id", deleteEmployee);
