const bcrypt = require('bcrypt');
const {client} = require('../database.js');

const signUpController = async (req, res) => {
    const database = client.db('Goal-Setter');
    const collection = database.collection('signedUpUsers');

    try{
        const password = await bcrypt.hash(req.body.password, 10);
        await collection.insertOne({"hashed password": password});
    }
    catch(error){
        console.error("there was an error hashing and storing password");
    }

}

module.exports = signUpController;