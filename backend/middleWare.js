const express = require("express");
const cors = require("cors");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const initializePassport = require("./passport-config.js");
const Users = require("./models/users.js");

initializePassport(passport, (email) => {
  return Users.find({userName: email});
});

const applyMiddleWare = (app) => {

  app.use(cors());
  app.use(express.json());
  app.use(flash());
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());

  console.log("middleware running");
};

module.exports = applyMiddleWare;
