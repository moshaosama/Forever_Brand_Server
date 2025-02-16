import expres from "express";
import { createDelivery } from "../../Controller/Delivery/CreateDelivery.js";

const createDeliveryRouter = expres.Router();

createDeliveryRouter.route("/").post(createDelivery);

export default createDeliveryRouter;
