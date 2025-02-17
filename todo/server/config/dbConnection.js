const mongoose = require("mongoose");
require("dotenv").config();
const URL = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URL);
    console.log(`Mongodb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.exit(1);
  }
};

module.exports = connectDB;