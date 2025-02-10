import express from "express";
import dotenv from "dotenv";
import SignUpRouter from "./Router/User/SignUpRouter.js";
import LoginRouter from "./Router/User/LoginRouter.js";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
////////////////////////////////

// Endpoints
app.use("/signup", SignUpRouter);
app.use("/login", LoginRouter);
////////////////////////////////

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error listening on port " + PORT);
  } else {
    console.log("Successfully started server on port " + PORT);
  }
});
