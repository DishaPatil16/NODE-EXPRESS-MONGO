const mongoose = require("mongoose"); // used to connect node app with running mongo db
const { timeStamp } = require("console");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
); // created , updated time bhi show karta he

const User = mongoose.model("user", userSchema);

module.exports = User;