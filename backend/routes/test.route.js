const express = require("express");
const routerTest = express.Router();
const testControllerGet = require('../controllers/test.controller.js');
const passport = require("passport")
const checkAuthenticated = require("../middleWare.js")

// maybe use checkAuthenticated function as middleware
routerTest.get('/test', testControllerGet)

module.exports = routerTest;