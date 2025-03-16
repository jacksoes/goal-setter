const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  goals: [{
    name: String,
    date: Date,
    completed: Boolean,
  }]
});



module.exports = mongoose.model("User", userSchema);


// add goals to this document goals = [{goalName: string, dueDate: date}]