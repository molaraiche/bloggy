const mongoose = require("mongoose");
const URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB connected!");
  } catch (error) {}
};

module.exports = connectDB;
