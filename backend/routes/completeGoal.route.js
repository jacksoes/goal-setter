const express = require("express")
const completeGoalController = require("../controllers/completeGoal.controller.js")


const completeGoalRouter = express.Router();


completeGoalRouter.put("/goals/:username", completeGoalController)

module.exports = completeGoalRouter;