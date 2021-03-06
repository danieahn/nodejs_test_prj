"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl");

router.get("/", ctrl.output.hello);
router.get("/skydash", ctrl.output.skydash);
router.get("/login", ctrl.output.login);
router.post("/login", ctrl.process.login);

module.exports = router;