// Define modules
const express = require("express");
const boletoController = require("../controllers/boletoController");

// Define route app
const router = express.Router();
router.get("/:digitalline", boletoController.validate);

module.exports = router;