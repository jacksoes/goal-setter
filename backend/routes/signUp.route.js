const { signUpControllerPost } = require("../controllers/signUp.controller.js");
const express = require("express");
const routerSignUp = express.Router();

routerSignUp.post("/signup", signUpControllerPost);

module.exports = routerSignUp;
