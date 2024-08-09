const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail) {
  const authenticateUser = (email, password, done) => {
    const user = getUserByEmail(email);
    if (user == null) {
      return done(null, false, { message: "no user with that email" });
    }

    try {
      if (await.bycrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ userName: "email" }), authenticateUser);
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
}


module.exports = initialize;