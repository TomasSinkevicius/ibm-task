const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", routesUrls);
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
