"use strict";

// use module
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3000;

// set app
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// set routing
const home = require("./src/routes/home");
app.use("/", home);

module.exports = app;


