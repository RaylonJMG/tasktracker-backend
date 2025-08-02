import { pool } from "../db/connection.js";

//CREATE USER
export const postUser = async (req, res) => {
	const sql = `insert into task_tracker.users(username, password, first_name, last_name, phone) values ($1, $2, $3, $4, $5)`;
	const { username, password, first_name, last_name, phone } = req.body;
	const parameters = [username, password, first_name, last_name, phone];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "User Created" });
};
//READ USER
export const getAllUsers = async (req, res) => {
	const sql = `select * from task_tracker.users`;
	const body = req.body;
	const result = await pool.query(sql);
	return res.json(result.rows);
};
//READ USER BY ID
export const getUserById = async (req, res) => {
	const { user_id } = req.params;
	const sql = `select user_id, 
                        username, password, first_name, last_name, phone 
                from task_tracker.users where user_id = $1`;
	const result = await pool.query(sql, [user_id]);
	return res.json(result.rows);
};
//UPDATE USER
export const putUser = async (req, res) => {
	const sql = `update task_tracker.users 
					set username = $1,
						password = $2,
						first_name = $3,
						last_name = $4,
						phone = $5,
					where user_id = $6`;
	const body = req.body;
	const user_id = req.params.user_id;
	const parameters = [body.username, body.user_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "User Updated" });
};
//DELETE USER
export const deleteUser = async (req, res) => {
	const sql = `delete from task_tracker.users where user_id = $1`;
	const user_id = req.params.user_id;
	const parameters = [user_id];
	const result = await pool.query(sql, parameters);
	return res.json({ message: "User removed" });
};
