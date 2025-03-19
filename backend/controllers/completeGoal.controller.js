const User = require("../models/users.model.js");

const completeGoalController =  async (req, res) => {
    const {username, goalID} = req.params
    const user = await User.findOne({ userName: username });
    if (!user) {
        console.log('User not found');
        return;
    }

    let goalArray = await User.findOne({userName: username})
    goalArray = goalArray.goals
    console.log(goalArray)

    let isCompleted;

    goalArray.forEach((goal) => {
        if(goal._id == goalID)
            isCompleted = goal.completed;
    })



    await User.updateOne(
        {userName: username, "goals._id": goalID},
        {$set: {"goals.$.completed": !isCompleted}}
    );

    res.sendStatus(200)




}


module.exports = completeGoalController;