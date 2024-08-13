const passport = require('passport')

const logInControllerPost = (passport.authenticate('local', {
    successRedirect: '/suc',
    failureRedirect: '/fuk',
    failureFlash: true,

}))

module.exports = logInControllerPost;