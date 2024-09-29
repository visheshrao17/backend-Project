const express = require('express');
const router = express.Router();
const { likePost } = require('../controllers/likeController');
const auth = require('../middleware/authMiddleware');

router.post('/:id', auth, likePost);

module.exports = router;

