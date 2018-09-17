const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("debug", true);

mongoose.connect(
  process.env.MONGODB,
  { useNewUrlParser: true }
);

module.exports.post = require("./post");
