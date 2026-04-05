const express = require("express");
const router = express.Router();

const { getData } = require("../controllers/apiController");
const apiKey = require("../middlewares/apiKey");

router.get("/player", apiKey, getData);

module.exports = router;
