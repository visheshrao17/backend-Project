const express = require('express');
const { blockUser, reportUser } = require('../controllers/privacyController');
const router = express.Router();

// Block a User
// POST /privacy/block/:blockedUserId
router.post('/block/:blockedUserId', blockUser);

// Report a User
// POST /privacy/report/:reportedUserId
router.post('/report/:reportedUserId', reportUser);

module.exports = router;
