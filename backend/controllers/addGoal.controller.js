const User = require("../models/users.model.js");

const addGoalController = async (req, res) => {
    console.log(JSON.stringify(req.body))

    await User.updateOne({userName : req.body.userName}, 
        {
            $push : {
        goals : req.body.goal
        }
    }
)

}

module.exports = addGoalController;
