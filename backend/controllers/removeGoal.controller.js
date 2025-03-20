const User = require("../models/users.model.js");

const removeGoalController = async (req, res) => {
  const { username, goalID } = req.params;

  await User.updateOne( { userName: username},
    { $pull:   { goals : {_id: goalID }} });
    console.log("remove goal controlelr ran")
  res.sendStatus(200)
};

module.exports = removeGoalController;
