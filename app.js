"use strict";

// use module
const express = require("express");
const app = express();
const PORT = 3000;

// set view
app.set("views", "./views");
app.set("view engine", "ejs");

// set routing
const home = require("./routes/home");
app.use("/", home);

module.exports = app;

