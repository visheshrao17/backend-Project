const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const router = express.Router();

// GET /users/:id - Get user profile details
router.get('/:id', getProfile);

// PUT /users/:id - Update user profile details
router.put('/:id',createOrUpdateProfile);

module.exports = router;
