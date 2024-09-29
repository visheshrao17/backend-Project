const express = require('express');
const router = express.Router();
const { sendMessage } = require('../controllers/messageController');
const auth = require('../middleware/authMiddleware');

router.post('/:chatId', auth, sendMessage);

module.exports = router;
