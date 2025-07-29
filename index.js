import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { tasks } from "./routes/tasksRoute.js";
import { employee } from "./routes/employeeRoute.js";
import fs from "fs";
import https from "https";
import { login } from "./routes/login.js";
import { register } from "./routes/register.js";

dotenv.config();
const app = express();
const environment = process.env.NODE_ENV;
let port = 4000;

if (environment === "production") {
	port = 443;
}

app.use(express.json());
app.use(cors());
app.use("/api", employee);
app.use("/api", tasks);
app.use("/api", login);
app.use("/api", register);

if (environment === "production") {
	const options = {
		key: fs.readFileSync(
			"/etc/letsencrypt/live/raylon-backend.codex-p4-2025.click/privkey.pem"
		),
		cert: fs.readFileSync(
			"/etc/letsencrypt/live/raylon-backend.codex-p4-2025.click/fullchain.pem"
		),
	};
	https.createServer(options, app).listen(port, () => {
		console.log("HTTPS server is running on port 443");
	});
} else {
	app.listen(port, () => {
		console.log(`server listening on port ${port}`);
	});
}
