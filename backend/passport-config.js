const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

function initialize(passport, getUserByEmail, getUserById) {
  
  const authenticateUser = async (email, password, done) => {
  
    const user = await getUserByEmail(email);
  
    if (user == null) {
      console.log("no user found");
      return done(null, false, { message: "no user with that email" });
    }

    try {
      const result = await bcrypt.compare(password, user.password);
      if (result) {
        console.log("password correct");
        return done(null, user);
      } else {
        console.log("password innncorrect");
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      console.log("ERRRRRR");
      return done(e);
    }
  };

  passport.use(
    new LocalStrategy({ usernameField: "userName" }, authenticateUser)
  );
  passport.serializeUser((user, done) => {
    console.log("serialize ran", user._id);
    return done(null, user._id);
  });
  passport.deserializeUser((id, done) => {
    //console.log("deserializeran", user)
    console.log("deserialization id:", id)
    return done(null, getUserById(id));
  });
}
module.exports = initialize;
