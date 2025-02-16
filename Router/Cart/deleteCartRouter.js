import express from "express";
import { deleteCart } from "../../Controller/Cart/deleteCartController.js";
const deleteCartRouter = express.Router();

deleteCartRouter.route("/:id").delete(deleteCart);

export default deleteCartRouter;
