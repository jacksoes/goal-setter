const { client } = require("../database.js");

const database = client.db("Goal-Setter");
const collection = database.collection("signedUpUsers");

const logInControllerPost = async (req, res) => {
    console.log(req.body)
    
}

module.exports = logInControllerPost;