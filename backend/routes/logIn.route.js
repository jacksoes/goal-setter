const express = require('express');
const logInControllerPost = require('../controllers/logIn.controller.js');
const routerLogIn = express.Router()

const {checkAuthenticated} = require('../middleWare.js')

routerLogIn.get('/login', checkAuthenticated, logInControllerPost);


module.exports = routerLogIn;