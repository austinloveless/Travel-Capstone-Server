const express = require("express");
const router = express.Router();

router.get("/*", (req, res) => {
  res.json({ message: "Sorry Invaild URL!" });
});

module.exports = router;
