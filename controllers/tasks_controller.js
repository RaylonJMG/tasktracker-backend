import { pool } from "../db/connection.js";

//CREATE TASKS
export const postTasks = async (req, res) => {
	const { description, status, employee_id } = req.body;
	const sql = `insert into task_tracker.tasks			(description, status, employee_id) values ($1, $2, $3) 	returning *`;
	const parameters = [description, status, employee_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Success: Task Added" });
};
//CREATE TASKS FOR SPECIFIC EMPLOYEE
export const postTasksById = async (req, res) => {
	const { employee_id } = req.params;
	const { description, status } = req.body;
	const sql = `insert into task_tracker.tasks(description, status, employee_id) values ($1, $2, $3) where employee_id = $4`;
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Success: Task Added" });
};
//GET TASKS BY EMPLOYEE
export const getTasksById = async (req, res) => {
	const { employee_id } = req.params;
	console.log("EMPLOYEE ID:", employee_id);
	const sql = `select 
					a.task_id,
					a.description,
					a.status,
					b.name as employee_name,
					b.employee_id
				from task_tracker.tasks a
				inner join task_tracker.employee b
					on a.employee_id = b.employee_id
				where employee_id = $1`;
	const result = await pool.query(sql, [employee_id]);
	return res.json(result.rows);
};
//GET TASKS
export const getAllTasks = async (req, res) => {
	const sql = `select 
					a.tasks_id,
					a.description,
					a.status,
					b.name as employee_name,
					b.employee_id
				from task_tracker.tasks a
				join task_tracker.employee b
					on a.employee_id = b.employee_id
				order by b.employee_id asc`;
	const result = await pool.query(sql, parameters);
	return res.json(result.rows);
};
//UPDATE TASKS
export const putTasks = async (req, res) => {
	const sql = `update task_tracker.tasks
					set description = $1
					status = $2
					employee_id = $3
					where tasks_id = $4`;
	const body = req.body;
	const { tasks_id } = req.params;
	const parameters = [
		body.task_id,
		body.description,
		body.status,
		body.employee_id,
	];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Task Updated" });
};
//DELETE TASKS
export const deleteTasks = async (req, res) => {
	const sql = `delete from task_tracker.tasks where tasks_id = $1`;
	const tasks_id = req.params.tasks_id;
	const parameters = [tasks_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Task removed" });
};
