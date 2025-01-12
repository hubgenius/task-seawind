const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const route = require("./routes/userRoutes");

app.use(bodyParser.json());

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDb Database Connected"))
  .catch((err) => {
    console.log("Error:::", err.message);
  });

app.use("/user", route);

app.listen(PORT, () => {
  console.log("Server running on  ", PORT);
});
