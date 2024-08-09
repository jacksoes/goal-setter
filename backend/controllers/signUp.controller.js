const bcrypt = require("bcrypt");
const { client } = require("../database.js");

const database = client.db("Goal-Setter");
const collection = database.collection("signedUpUsers");

const signUpControllerPost = async (req, res) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    await collection.insertOne({
      userName: req.body.userName,
      password: password,
    });
  } catch (error) {
    console.error("there was an error hashing and storing password");
  }
};

const signUpControllerGet = async (req, res) => {
    try {
        const user = await collection.find().toArray()
        res.json(user);
    } catch (err)
    {
        console.error("error fetching user", err);
    }

}

module.exports = {signUpControllerPost, signUpControllerGet};

