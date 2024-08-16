const testControllerGet = (req, res) => {

    console.log("test user authenticated", req.isAuthenticated());

    res.json({"message": 'testController: res sent'});

}

module.exports = testControllerGet;

