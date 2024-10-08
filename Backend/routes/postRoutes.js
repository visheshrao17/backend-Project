const express = require('express');
const router = express.Router();
const { createPost, getPost } = require('../controllers/postController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, createPost);
router.get('/:id', getPost);

module.exports = router;
