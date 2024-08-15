const express = require('express');
const logInControllerPost = require('../controllers/logIn.controller.js');
const routerLogIn = express.Router()

const passport = require("passport")




routerLogIn.post('/login', passport.authenticate('local'), logInControllerPost);


module.exports = routerLogIn;