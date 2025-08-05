import express from "express";
import { postUser } from "../controllers/user_controller.js";
import { validateToken } from "../middleware/authValidation.js";

export const user = express.Router();

//CREATE USER
user.post("/user", validateToken, postUser);

/**MAY BE UNECESSARY FOR CAPSTONE**/

//READ ALL USERS
// user.get("/user", validateToken, getAllUsers);
// //READ USER BY ID
// user.get("/user/:user_id", validateToken, getUserById);
// //UPDATE USER
// user.put("/user/:user_id", validateToken, putUser);
// // DELETE USER
// user.delete("/user/:user_id", validateToken, deleteUser);
