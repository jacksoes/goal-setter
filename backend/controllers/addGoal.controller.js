const User = require("../models/users.model.js");

const addGoalController = async (req, res) => {
    console.log(JSON.stringify(req.body))
    const test = await User.findOne({ userName: "testing@testing.com" })
    console.log(test);

    await User.updateOne({userName : "testing@testing.com"}, 
        {
            $push : {
        goals : {name: "yo", date: new Date("2022-02-01"), completed: false }
        }
    }
)

}

module.exports = addGoalController;
