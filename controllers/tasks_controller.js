import { pool } from "../db/connection.js";

//CREATE TASKS
export const postTasks = async (req, res) => {
	const sql = `insert into task_tracker.tasks(description, status, employee_id) values ($1, $2, $3)`;
	const body = req.body;
	const parameters = [body.description, body.status, body.employee_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Object Created" });
};
//GET TASKS
export const getTasksById = async (req, res) => {
	const sql = `select 
					a.tasks_id,
					a.description,
					a.status,
					b.name as employee_name,
					b.employee_id
				from task_tracker.tasks a
				inner join task_tracker.employee b on a.employee_id = b.employee_id
				where a.employee_id =$1`;
	const result = await pool.query(sql, [employee_id]);
	return res.json(result.rows);
};
//GET TASKS BY EMPLOYEE
export const getEmployeeTasks = async (req, res) => {
	const body = req.body;
	const sql = `select 
					a.tasks_id,
					a.description,
					a.status,
					b.name as employee_name,
					b.employee_id  
				from task_tracker.tasks a
				inner join task_tracker.employee b on a.employee_id = b.employee_id`;
	const result = await pool.query(sql, [employee_id]);
	return res.json(result.rows);
};
//UPDATE TASKS
export const putTasks = async (req, res) => {
	const sql = `update task_tracker.tasks
						set status = $1
					where task_id = $2`;
	const body = req.body;
	const task_id = req.params.task_id;
	const parameters = [body.status, task_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Object Updated" });
};
//DELETE TASKS
export const deleteTasks = async (req, res) => {
	const sql = `delete from task_tracker.tasks where task_id = $1`;
	const task_id = req.params.task_id;
	const parameters = [task_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Object removed" });
};
