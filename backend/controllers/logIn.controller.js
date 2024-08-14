const passport = require("passport");



const logInControllerPost = (req, res) => {
    console.log("loginsucess ran!")
  res.send({"message": "testst"});
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