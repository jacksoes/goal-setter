const express = require("express");
const cors = require("cors");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");

const initializePassport = require("./passport-config.js");
const Users = require("./models/users.js");


initializePassport(
  passport,
  (email) => {
    return Users.findOne({ userName: email });
  },
  (id) => {
    return Users.findOne({ _id: id });
  }
);


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

  app.post('/login', passport.authenticate('local', {
    successRedirect: '/login',
    failureRedirect: '/fuc',
    failureFlash: false
  })
)

  console.log("middleware running");
};

function checkAuthenticated(req, res, next) {
  console.log("checkauthenticate ran", req.user)
  console.log("checking req.isauthenticated", req.isAuthenticated());
  if (req.isAuthenticated()) {
    console.log("user is authenticated")
    return next()
  }

  console.log("user is not authenticated")
}


module.exports = {applyMiddleWare, checkAuthenticated};
