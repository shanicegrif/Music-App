const express = require("express");
const colors = express.Router();


colors.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = colors;