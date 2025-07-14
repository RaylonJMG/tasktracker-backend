import { pool } from "../db/connection.js";

//CREATE TASKS
export const postTasks = async (req, res) => {
	const sql = `insert into task_tracker.tasks (description, status, employee_id) values ($1, $2, $3)`;
	const body = req.body;
	const parameters = [body.task_id, body.description, body.status, employee_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "Object Created" });
};
//READ TASKS
export const getTasks = async (req, res) => {
	const sql = `select * task_id from task_tracker.tasks `;
	const result = await pool.query(sql);
	return res.json(result.rows);
};
//UPDATE TASKS
export const putTasks = async (req, res) => {
	const sql = `update task_tracker.status
                        set status = $1
                    where task_id = $2`;

	const body = req.body;
	const task_id = req.params.task_id;
	const parameters = [body.task_id, body.description, body.status, employee_id];
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
