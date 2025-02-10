import express from "express";
import { Login } from "../../Controller/User/Login.js";
const LoginRouter = express.Router();

LoginRouter.route("/").post(Login);

export default LoginRouter;
