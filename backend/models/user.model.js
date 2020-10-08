const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true, //white space off
      minlength: 3, //at least three character
    },
  },
  {
    timestamps: true, //when created
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
