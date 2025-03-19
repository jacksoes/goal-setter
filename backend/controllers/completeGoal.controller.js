const User = require("../models/users.model.js");

const completeGoalController =  async (req, res) => {
    const {username} = req.params
    const user = await User.findOne({ userName: username });
    if (!user) {
        console.log('User not found');
        return;
    }

    await User.updateOne({ userName: username }, { completed: true });


}


module.exports = completeGoalController;