import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { tasks } from "./routes/tasksRoute.js";
import { employee } from "./routes/employeeRoute.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", employee);
app.use("/api", tasks);
app.use("/api", user);

const port = 4000;
app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
