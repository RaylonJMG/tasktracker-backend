import { pool } from "../db/connection.js";

//CREATE EMPLOYEE
export const postEmployee = async (req, res) => {
	const sql = `insert into task_tracker.employee(name, department, role) values ($1, $2, $3)`;
	const body = req.body;
	const parameters = [body.name, body.department, body.role];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Success: New employee created" });
};
//READ EMPLOYEE
export const getAllEmployees = async (req, res) => {
	const body = req.body;
	const parameters = [body.employee_id, body.name, body.department, body.role];
	const sql = `select 
					employee_id,
					name,
					department,
					role
				from task_tracker.employee
				order by employee_id asc`;
	const result = await pool.query(sql);
	return res.json(result.rows);
};
//GetByEmployee_ID
export const getEmployeeById = async (req, res) => {
	const { employee_id } = req.params;
	const sql = `select 
						employee_id,
						name,
						department,
						role
				 from task_tracker.employee
				 where employee_id = $1`;
	const result = await pool.query(sql, [employee_id]);
	return res.json(result.rows);
};

//UPDATE EMPLOYEE
export const putEmployee = async (req, res) => {
	const sql = `update task_tracker.employee
					set name = $1,
						department = $2,
						role = $3
				where employee_id = $4`;
	const body = req.body;
	const { employee_id } = req.params;
	const parameters = [body.name, body.department, body.role, employee_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Success: Employee Updated" });
};
//DELETE EMPLOYEE
export const deleteEmployee = async (req, res) => {
	const sql = `delete from task_tracker.employee where employee_id = $1`;
	const { employee_id } = req.params;
	const parameters = [employee_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Success: Employee removed" });
};
