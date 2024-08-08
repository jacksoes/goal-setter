const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

const connectDatabase = async () => {
  async function connect() {
    try {
      await client.connect();
    } catch (error) {
      console.error("error connectiong", error);
    }
  }
  connect();
  console.log("successfully connected to database");
};

module.exports = { connectDatabase, client };
