var db = require("../models");
const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/", (req, res) => {
  db.Comment.find()
    .then(function(comment) {
      res.json(comment);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  db.Comment.create(req.body)
    .then(function(newComment) {
      res.status(201).json(newComment);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.get("/:commentId", (req, res) => {
  db.Comment.findById(req.params.commentId)
    .then(function(foundComment) {
      res.json(foundComment);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.put("/:commentId", (req, res) => {
  db.Comment.findOneAndUpdate({ _id: req.params.commentId }, req.body, {
    new: true
  })
    .then(function(comment) {
      res.json(comment);
    })
    .catch(function(err) {
      res.send(err);
    });
});

router.delete("/:commentId", (req, res) => {
  db.Comment.remove({ _id: req.params.commentId })
    .then(function() {
      res.json({ message: "We deleted it!" });
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
