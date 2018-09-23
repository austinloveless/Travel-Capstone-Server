require("dotenv").config();
const db = require("../models");
const express = require("express");
const router = express.Router({ mergeParams: true });
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new aws.S3({
  apiVersion: "2006-03-01",
  region: process.env.AWS_REGION_USER,
  credentials: {
    secretAccessKey: process.env.AWS_SECRET_KEY_USER,
    accessKeyId: process.env.AWS_ACCESS_KEY_USER
  }
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_BUCKET_USER,
    key: (request, file, next) => {
      next(null, `files/${Date.now()}_${file.originalname}`);
    }
  })
});

router.get("/", (req, res) => {
  db.User.find()
    .then(function(user) {
      res.json(user);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  db.User.create(req.body)
    .then(function(newUser) {
      res.status(201).json(newUser);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.post("/profileUpload", upload.single("image"), (req, res) => {
  res.status(200).json(req.file);
});

router.get("/:userId", (req, res) => {
  db.User.findById(req.params.userId)
    .then(function(foundUser) {
      res.json(foundUser);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put("/:userId", (req, res) => {
  db.User.findOneAndUpdate({ _id: req.params.userId }, req.body, {
    new: true
  })
    .then(function(post) {
      res.json(post);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete("/:userId", (req, res) => {
  db.User.remove({ _id: req.params.userId })
    .then(function() {
      res.json({ message: "We deleted it!" });
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
