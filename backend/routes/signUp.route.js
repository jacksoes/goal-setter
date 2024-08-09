const {signUpControllerPost, signUpControllerGet} = require('../controllers/signUp.controller.js');
const express = require('express');
const routerSignUp = express.Router()

routerSignUp.post("/signUp", signUpControllerPost);

routerSignUp.get("/signUp", signUpControllerGet)

module.exports = routerSignUp

