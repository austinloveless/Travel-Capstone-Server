const mongoose = require("mongoose");
require("dotenv").config();
const Post = require("./post");
const Comment = require("./comment");
const User = require("./user");

mongoose.set("debug", true);

mongoose.connect(
  process.env.MONGODB,
  { useNewUrlParser: true }
);

module.exports = {
  Post,
  Comment,
  User
};
