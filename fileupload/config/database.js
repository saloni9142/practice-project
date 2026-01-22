const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error(" Database connection failed");
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;
