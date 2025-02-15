import express from "express";
import { addToCart } from "../../Controller/Cart/addCartController.js";
const addToCartRouter = express.Router();

addToCartRouter.route("/").post(addToCart);

export default addToCartRouter;
