"use strict";

// use module
const express = require("express");
const app = express();
const PORT = 3000;

// set app
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

// set routing
const home = require("./src/routes/home");
app.use("/", home);

module.exports = app;


