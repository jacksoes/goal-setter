const express = require("express")
const completeGoalController = require("../controllers/completeGoal.controller.js")


const completeGoalRouter = express.Router();


completeGoalRouter.put("/goals/:username/:goalID", completeGoalController)

module.exports = completeGoalRouter;