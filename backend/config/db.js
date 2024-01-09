process.env.SUPPRESS_NO_CONFIG_WARNING = "1";
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.createConnection(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
