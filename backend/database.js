const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

const connectDatabase = async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error("error connectiong", error);
  }

  console.log("successfully connected to database");
};

module.exports = { connectDatabase, client };
