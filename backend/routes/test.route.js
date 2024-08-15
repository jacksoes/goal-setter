const express = require("express");
const routerTest = express.Router();
const testControllerGet = require('../controllers/test.controller.js');


routerTest.get('/test', testControllerGet)

module.exports = routerTest;