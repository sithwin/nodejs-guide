const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Shop middleware");
  res.send("<h1>Hello from Shop</h1>");
});

module.exports = router;
