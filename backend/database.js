const mongoose = require("mongoose");

require("dotenv").config();

const connectDatabase = async () => {
  mongoose.connect(process.env.MONGO_URI);
  const cxn = mongoose.connection;

  cxn
    .on("open", () => console.log("mongoose is connected"))
    .on("close", () => console.log("mongoose is disconected"))
    .on("error", (error) => console.log(error));
};

module.exports = { connectDatabase };
