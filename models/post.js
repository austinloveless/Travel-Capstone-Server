var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  title: String,
  image: String,
  desc: String,
  createdAt: { type: Date, default: Date.now },
  liked: Boolean
});

module.exports = mongoose.model("Post", postSchema);
