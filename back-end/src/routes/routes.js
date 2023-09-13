const express = require('express');
const router = express.Router();

// classes from controllers

const PromptController = require('../controllers/PromptController');

router.use("/", (require, answear) => {
    answear.send("OK");
  });

router.post("/chat", PromptController.sendText);

module.exports = router;
