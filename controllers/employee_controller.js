import { pool } from "../db/connection.js";

//CREATE EMPLOYEE
export const postEmployee = async (req, res) => {
	const sql = `insert into task_tracker.employee ( name, department, role) values ($1, $2, $3)`;
	const body = req.body;
	const parameters = [body.name, body.department, body.role];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Object created" });
};
//READ EMPLOYEE
export const getEmployee = async (req, res) => {
	const sql = `select * from task_tracker.employee`;
	const body = req.body;
	const result = await pool.query(sql);
	return res.json(result.rows);
};
//GetByEmployee_ID
export const getEmployeeId = async (req, res) => {
	const { employee_id } = req.params;
	const sql = `select employee_id, 
                        name, 
                        department,
                        role 
                from task_tracker.employee where employee_id = $1`;
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
	const employee_id = req.params.employee_id;
	const parameters = [body.name, body.department, body.role, employee_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Object Updated" });
};
//DELETE EMPLOYEE
export const deleteEmployee = async (req, res) => {
	const sql = `delete from task_tracker.employee where employee_id = $1`;
	const employee_id = req.params.employee_id;
	const parameters = [employee_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Object removed" });
};
