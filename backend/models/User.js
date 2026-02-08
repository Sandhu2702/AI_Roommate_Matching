const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: { 
    type: String,
    required:true, 
    unique: true,
  },
  password: {
    type:String,
    required:true
  } ,
  gender: { 
    type: String, 
    enum: ["boy", "girl"] 
  },
  hostel: String,
  year: Number,
  preferences: {
    sleepTime: String,
    studyHabits: String,
    cleanliness: String
  }
},{timestamps:true});

module.exports = mongoose.model("User", userSchema);
