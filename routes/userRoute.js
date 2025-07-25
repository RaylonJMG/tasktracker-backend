import express from "express";

export const user = express.Router();

user.post("/user", postUser);
user.post("/user/auth", auth);
