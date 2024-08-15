const express = require("express");
const routerTest = express.Router();
const testControllerGet = require('../controllers/test.controller.js');
const {checkAuthenticated} = require('../middleWare.js')


routerTest.get('/test', checkAuthenticated, testControllerGet)

module.exports = routerTest;