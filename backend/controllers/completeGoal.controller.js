const User = require("../models/users.model.js");

const completeGoalController =  async (req, res) => {
    const {username, goalID} = req.params
    const user = await User.findOne({ userName: username });
    console.log(goalID)
    if (!user) {
        console.log('User not found');
        return;
    }

    await User.updateOne(
        {userName: username, "goals._id": goalID},
        {$set: {"goals.$.completed": true}}
    );


}


module.exports = completeGoalController;