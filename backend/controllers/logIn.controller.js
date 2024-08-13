const passport = require('passport')

const logInControllerPost = (passport.authenticate('local', {
    successRedirect: '/bro',
    failureRedirect: '/fuk',
    failureFlash: true,

}))

module.exports = logInControllerPost;