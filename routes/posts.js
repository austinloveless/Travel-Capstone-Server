var db = require("../models");
const express = require("express");
const router = express.Router({ mergeParams: true });

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
  db.Post.create(req.body)
    .then(function(newPost) {
      res.status(201).json(newPost);
    })
    .catch(function(err) {
      res.send(err);
    });
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
