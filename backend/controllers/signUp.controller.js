const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/users.js");

const signUpControllerPost = async (req, res) => {
  const newUserName = req.body.userName;
  const newPassword = await bcrypt.hash(req.body.password, 10);
  const newUser = { userName: newUserName, password: newPassword };

  const existingUser = await User.findOne({ userName: newUserName });
  const validationErrors = validateInput(req, existingUser);

  if (validationErrors)
    return res.status(400).json({ error: validationErrors });

  await User.create(newUser);
};

module.exports = { signUpControllerPost };



function validateInput(req, existingUser) {
  const { userName, password } = req.body;
  let errors = "";

  if (existingUser) errors += "User already exists \n";
  if (!userName) errors += "Username is required \n";
  if (!password) errors += "Password is required \n";

  return errors.length ? errors : null;
}
