import express from "express";
import dotenv from "dotenv";
import SignUpRouter from "./Router/User/SignUpRouter.js";
import LoginRouter from "./Router/User/LoginRouter.js";
import cors from "cors";
import addToCartRouter from "./Router/Cart/addCartRouter.js";
import { getCartRouter, getSumRouter } from "./Router/Cart/getCartRouter.js";
import deleteCartRouter from "./Router/Cart/deleteCartRouter.js";
import createDeliveryRouter from "./Router/Delivery/CreateDelivery.js";
import getDeliveryRouter from "./Router/Delivery/getDelivery.js";
dotenv.config();
const PORT = process.env.PORT | 8000;
const app = express();
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
////////////////////////////////

// Endpoints
app.use("/signup", SignUpRouter);
app.use("/login", LoginRouter);
app.use("/addcart", addToCartRouter);
app.use("/getcarts", getCartRouter);
app.use("/deletecart", deleteCartRouter);
app.use("/getsumprice", getSumRouter);
app.use("/createdelivery", createDeliveryRouter);
app.use("/getdelivery", getDeliveryRouter);

app.route("/", (req, res) => {
  res.json("Mosha Osama");
});
////////////////////////////////

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error listening on port " + PORT);
  } else {
    console.log("Successfully started server on port " + PORT);
  }
});
