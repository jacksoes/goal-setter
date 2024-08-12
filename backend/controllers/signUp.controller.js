const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/users.js");

const signUpControllerPost = async (req, res) => {
  if (!req.body.userName || !req.body.password) {
    return res
      .status(400)
      .json({ error: "both userName and password is required" });
  }

  const newUserName = req.body.userName;
  try {
    const existingUser = await User.findOne({ userName: newUserName });
    if (existingUser) {
      return res.status(409).json({ error: "username is already taken" });
    }

    const newPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = { userName: newUserName, password: newPassword };
    User.create(newUser);
  } catch (error) {
    console.error("error interacting with database", error);
  }
};

const signUpControllerGet = async (req, res) => {
  try {
    const user = await collection.find().toArray();
    res.json(user);
  } catch (err) {
    console.error("error fetching user", err);
  }
};

module.exports = { signUpControllerPost, signUpControllerGet };
