const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  gender: { type: String, enum: ["boy", "girl"] },
  hostel: String,
  year: Number,
  preferences: {
    sleepTime: String,
    studyHabits: String,
    cleanliness: String
  }
});

module.exports = mongoose.model("User", userSchema);
