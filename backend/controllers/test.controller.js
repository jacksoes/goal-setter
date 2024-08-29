const sessions = require("../models/session.js");

const testControllerGet = (req, res) => {
    console.log(req.cookies);
    console.log("test user authenticated", req.isAuthenticated());
    console.log(sessions.find());

    res.json({"message": 'testController: res sent'});

}

module.exports = testControllerGet;

