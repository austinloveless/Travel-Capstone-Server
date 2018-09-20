require("dotenv").config();
const db = require("../models");
const express = require("express");
const router = express.Router({ mergeParams: true });
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

//aws config
const s3 = new aws.S3({
  apiVersion: "2006-03-01",
  region: process.env.AWS_REGION,
  credentials: {
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY
  }
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET,
    key: (request, file, next) => {
      next(null, `files/${Date.now()}_${file.originalname}`);
    }
  })
});

router.get("/", (req, res) => {
  db.Post.find()
    .then(function(post) {
      res.json(post);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  console.log("body", req.body);
  db.Post.create(req.body)
    .then(function(newPost) {
      res.status(201).json(newPost);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.post("/upload", upload.single("image"), (req, res) => {
  res.status(200).json(req.file);
});

router.get("/:postId", (req, res) => {
  db.Post.findById(req.params.postId)
    .then(function(foundPost) {
      res.json(foundPost);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put("/:postId", (req, res) => {
  db.Post.findOneAndUpdate({ _id: req.params.postId }, req.body, {
    new: true
  })
    .then(function(post) {
      res.json(post);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete("/:postId", (req, res) => {
  db.Post.remove({ _id: req.params.postId })
    .then(function() {
      res.json({ message: "We deleted it!" });
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
