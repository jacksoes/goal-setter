const express = require("express")
const removeGoalController = require("../controllers/removeGoal.controller.js")

const routerRemoveGoal = express.Router();


routerRemoveGoal.delete("/removeGoal/:username/:goalID", removeGoalController)

module.exports = routerRemoveGoal;