import jwt from "jsonwebtoken";
const secret = "Zy9Xw876";

export const validateToken = (req, res, next) => {
	try {
		const token = req.headers.authorization;
		const newToken = token.replace("Bearer", "");
		const result = jwt.verify(newToken, secret);
		next();
	} catch (err) {
		return res
			.status(400)
			.json({ message: "Token not valid", error: err.message });
	}
};
