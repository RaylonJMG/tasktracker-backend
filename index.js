import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { tasks } from "./routes/tasksRoute.js";
import { employee } from "./routes/employeeRoute.js";
import fs from "fs";
import https from "https";
import { login } from "./routes/login.js";
import { register } from "./routes/register.js";
import { user } from "./routes/userRoute.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api/", employee);
app.use("/api/", tasks);
app.use("/api/", user);
app.use("/api/", login);
app.use("/api/", register);

let port = 4000;
const environment = process.env.NODE_ENV;
if (environment === "production") {
	port = 443;
	const options = {
		key: fs.readFileSync(
			"/etc/letsencrypt/live/raylon-backend.codex-p4-2025.click/privkey.pem"
		),
		cert: fs.readFileSync(
			"/etc/letsencrypt/live/raylon-backend.codex-p4-2025.click/fullchain.pem"
		),
	};
	https.createServer(options, app).listen(port, () => {
		console.log("The HTTPS server is running on port 443.");
	});
} else {
	app.listen(port, () => {
		console.log(`The server is listening on port ${port}.`);
	});
}
