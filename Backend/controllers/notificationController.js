const Notification = require('../models/Notification');

// Get Notifications
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ user: req.user.userId }).sort({ createdAt: -1 });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Mark Notifications as Read
exports.markAsRead = async (req, res) => {
    try {
        await Notification.updateMany({ user: req.user.userId, read: false }, { $set: { read: true } });
        res.status(200).json({ message: 'Notifications marked as read' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
