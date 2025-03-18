const User = require("../models/users.model.js");


const getGoalsController =  async (req, res) => {
    
    const {username} = req.params
    // get goals from database
    // return as res
    const user = await User.findOne({userName: username})
    const userGoals = user.goals
    res.send(userGoals)
}



module.exports = getGoalsController;