import { signup,login } from "../controller/user.controller.js";

import express from "express";
const useroute = express.Router();

useroute.post("/signup", signup);
useroute.post("/login", login);

export default useroute
