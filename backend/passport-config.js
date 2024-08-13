const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
 
    if (user == null) {
      return done(null, false, { message: "no user with that email" });
    }

    try {
      const result = await bcrypt.compare(password, user.password)

      if (result) {
        console.log("password correct")
        return done(null, user);
      } else {
        
        console.log("password innncorrect")
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      console.log("ERRRRRR")
      return done(e);
    }
    
  };

  passport.use(new LocalStrategy({usernameField: 'userName', passwordField: 'password'}, authenticateUser));
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((id, done) => {});
}
module.exports = initialize;