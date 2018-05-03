const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyB6CKP1IfIPecMOi2HN4Y0-bLGZVUxELHI" });
});

module.exports = siteController;
