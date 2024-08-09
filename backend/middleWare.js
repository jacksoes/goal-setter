const express = require("express");
const cors = require("cors");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

//initializePassport(passport);

const applyMiddleWare = (app) => {
  console.log("middleware running");
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
};

module.exports = applyMiddleWare;
