const express = require("express");
const addGoalRouter = express.Router();

const addGoalController = require("../controllers/addGoal.controller.js");



addGoalRouter.post("/addGoal", addGoalController);



module.exports = addGoalRouter;