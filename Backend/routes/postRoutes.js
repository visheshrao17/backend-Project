const express = require('express');
const { createPost, getPost } = require('../controllers/postController');
const { likePost, commentPost } = require('../controllers/postController');
const router = express.Router();

// POST /posts - Create a new post
router.post('/', createPost);

// GET /posts/:id - Get post details
router.get('/:id', getPost);

// POST /posts/:id/like - Like a post
router.post('/:id/like', likePost);

// POST /posts/:id/comment - Add a comment to a post
router.post('/:id/comment', commentPost);

module.exports = router;
