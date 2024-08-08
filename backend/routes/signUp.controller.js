const signUpController = require('../controllers/signUp.controller');
const express = require('express');
const router = express.Router()

router.post("/signUp", signUpController);

export default router;