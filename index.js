require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const TextRoutes = require("./src/routes/index");
const notFoundRoute = require("./src/view/notFound");
const cors = require("cors");
const connectDB = require("./src/config/db");

const PORT = 8080 || process.env;
const app = express();
app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);

//api route;
app.use("/api", TextRoutes);
app.use("*", notFoundRoute);

connectDB();
app.listen(PORT, () => {
  console.log(`Local server started at ${PORT}`);
});
