import { pool } from "../db/connection.js";

//REGISTER USERS
export const registerUser = async (req, res) => {
	const sql = `insert into task_tracker.users (username, password, first_name, last_name, phone) values ($1, $2, $3, $4, $5)`;
	const { username, password } = req.body;
	const parameter = [username, password, first_name, last_name, phone];
	const result = await pool.query(sql, parameter);
	return res.json({ message: "User Created" });
};
