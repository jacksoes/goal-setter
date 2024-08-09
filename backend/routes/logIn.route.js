const express = require('express');
const logInControllerPost = require('../controllers/logIn.controller.js');
const routerLogIn = express.Router()

routerLogIn.post('/logIn', logInControllerPost);


module.exports = routerLogIn;