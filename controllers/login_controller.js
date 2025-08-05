import { pool } from "../db/connection.js";
import jwt from "jsonwebtoken";

//LOGIN USER AUTHENTICATION
export const authLoginUser = async (req, res) => {
	const sql = `select 
					username,
					password,
					first_name,
					last_name,
					phone
				from task_tracker.users
				where username = $1 and password = $2`;
	const { username, password } = req.body;
	const result = await pool.query(sql, [username, password]);

	if (result.rowCount === 1) {
		console.log("Auth Pass");
		const payload = result.rows[0];
		const secret = "Zy9Xw876";
		const token = jwt.sign(payload, secret, { expiresIn: "1h" });
		return res.json({ token });
	} else {
		console.log("Access Denied!!");
		return res.status(400).json({ message: "Auth Failed!" });
	}
};
