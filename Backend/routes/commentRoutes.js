const express = require('express');
const router = express.Router();
const { createComment } = require('../controllers/commentController');
const auth = require('../middleware/authMiddleware');

router.post('/:id', auth, createComment);

module.exports = router;

