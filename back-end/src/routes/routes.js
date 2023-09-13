const express = require('express');
const router = express.Router();

const PromptController = require('../controllers/PromptController');

router.post("/chat", PromptController.sendText);

module.exports = router;
