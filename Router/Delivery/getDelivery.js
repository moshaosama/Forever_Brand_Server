import express from "express";
import { getDelivery } from "../../Controller/Delivery/getDelivery.js";

const getDeliveryRouter = express.Router();

getDeliveryRouter.route("/").get(getDelivery);

export default getDeliveryRouter;
