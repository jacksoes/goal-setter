const passport = require("passport");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const logInControllerPost = async (req, res) => {
  // ! problem is cookies are sent to server before they are instantianted on client side
  if (req.isAuthenticated()) {
    

    res.json({ success: true, message: "Login Success!"});
  } else {
    res.status(401).json({ sucess: false, message: "Login failed" });
  }
};

module.exports = logInControllerPost;

/*
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("error authenticating login", err);
      return res.status(500).send({ error: "internal server error" });
    }
    if (!user) {
      console.log("no user found for log in");
      return res.status(400).send({ error: "No user found" });
    }
    res.send({ userID: user.id });
  })(req, res);*/

/*


 passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Error authenticating login", err);
      return res.status(500).send({ error: "Internal server error" });
    }
    if (!user) {
      console.log("No user found for login");
      return res.status(400).send({ error: "No user found" });
    }

 
    req.logIn(user, (err) => {
      if (err) {
        console.error("Error logging in user", err);
        return res.status(500).send({ error: "Internal server error" });
      }
      res.status(200).send({'message': 'Logged in'});
      
      
     
    });
    fetch('http://localhost:3000/test')
  })(req, res, next); */
