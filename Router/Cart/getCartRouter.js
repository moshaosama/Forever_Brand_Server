import express from "express";
import { getCarts } from "../../Controller/Cart/getCartController.js";
const getCartRouter = express.Router();

getCartRouter.route("/").get(getCarts);

export default getCartRouter;
