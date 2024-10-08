const express = require("express");
const cors = require("cors");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cookieParser = require("cookie-parser")

// ! change out cookies and use local or session storage

// ! NEVERMIND use cookies to check if user is logged in using authorization token. local storage can be used for caching.

const initializePassport = require("./passport-config.js");
const Users = require("./models/users.js");

initializePassport(
  passport,
  (email) => {
    return Users.findOne({ userName: email });
  },
  (id) => {
    return Users.findById(id)
  }
);

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
}

const applyMiddleWare = (app) => {
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(flash());
  app.use(cookieParser());
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
      cookie: {
        secure: false, // Set to true in production (see below for HTTPS)
        httpOnly: true, // Helps mitigate XSS attacks
        maxAge: 1000 * 60 * 60 * 24, // 1 hour session expiration
      }
    })
  );

  

  app.use(passport.initialize());
  app.use(passport.session());



  console.log("middleware running");

};

function checkAuthenticated(req, res, next) {
  console.log('check auth cookies:', req.cookies)
  console.log("checking req.isauthenticated", req.isAuthenticated());
  if (req.isAuthenticated()) {
    console.log("user is authenticated");
    return next();
  }

  console.log("user is not authenticated");
}

module.exports = { applyMiddleWare, checkAuthenticated };
