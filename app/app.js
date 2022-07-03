"use strict";

// use module
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = 3000;

// set app
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// set route
const home = require("./routes/home");
app.use("/", home);

// start server
app.listen(PORT, function(){
    console.log("Start http server!");
});

module.exports = app;


