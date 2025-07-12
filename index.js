import express from "express";
import { tasks } from "./routes/tasksRoute.js";
import { employee } from "./routes/employeeRoute.js";

const app = express();

app.use(express.json()); //adds json communication
app.use("/api", employee);
app.use("/api", tasks);

const port = 4000;
app.listen(port, () => console.log(`server listening on port ${port}`));
