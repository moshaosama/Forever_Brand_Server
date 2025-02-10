import express from "express";
import { SignUp } from "../../Controller/User/SignUp.js";
const SignUpRouter = express.Router();

SignUpRouter.route("/").post(SignUp);

export default SignUpRouter;
