const express = require("express");
const routerLogOut = express.Router();

const logOutController = require("../controllers/logOut.controller.js");

routerLogOut.delete("/logout", logOutController);

module.exports = routerLogOut;
