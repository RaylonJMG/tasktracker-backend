import { pool } from "../db/connection";
import jwt from "jsonwebtoken";

export const postUser = async (req, res) => {
	const sql = `insert into task_tracker.userTable (email, password, first_name, last_name, birth_date) values ($1, $2, $3, $4, $5)`;
	const { email, password, first_name, last_name, birth_date } = req.body;
	const parameter = [email, password, first_name, last_name, birth_date];
	const result = await pool.query(sql, parameter);
	return res.json({ message: "User Created" });
};

export const auth = async (req, res) => {
	const sql = `select email, first_name, last_name from task_tracker.userTable`;
	const { email, password } = req.body;
	const result = await pool.query(sql, [email, password]);

	if (result.rowCount === 1) {
		console.log("Auth Pass");
		const payload = result.rows[0];
		const secret = "Hello";
		const token = await jwt.sign(payload, secret, { expiresIn: "1h" });
		return res.json({ token });
	} else {
		console.log("Arrghh!!");
		return res.status(400).json({ message: "Auth Failed!" });
	}
};

//ERROR STATUSES
//200 = success
//300 = validation fail
//400 = forbidden
//500 = wrong operation
