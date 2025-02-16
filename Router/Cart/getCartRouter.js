import express from "express";
import {
  getCarts,
  getSumPrice,
} from "../../Controller/Cart/getCartController.js";
const getCartRouter = express.Router();
const getSumRouter = express.Router();

getCartRouter.route("/").get(getCarts);
getSumRouter.route("/").get(getSumPrice);

export { getCartRouter, getSumRouter };
