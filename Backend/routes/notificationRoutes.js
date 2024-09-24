const express = require('express');
const { getNotifications, markAsRead } = require('../controllers/notificationController');
const router = express.Router();


router.get('/', getNotifications);


router.put('/read', markAsRead);

module.exports = router;
