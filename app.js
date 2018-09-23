require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const commentRoutes = require("./routes/comments");
const postRoutes = require("./routes/posts");
const indexRoutes = require("./routes");
const userRoutes = require("./routes/users");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/comments", commentRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);
app.use(indexRoutes);

app.listen(port, () => {
  console.log("listening on port", port);
});
