const express = require("express")
const getGoalsController = require("../controllers/getGoals.controller.js")

const getGoalsRouter = express.Router()


getGoalsRouter.get("/goals/:username", getGoalsController)


module.exports = getGoalsRouter;