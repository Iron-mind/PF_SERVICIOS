const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const route = require("../Src/Routes");
require("./Models/index.js");

app.use(morgan("dev"));
app.use(cors());
app.set("PORT", process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use("/api", route);

module.exports = app;
