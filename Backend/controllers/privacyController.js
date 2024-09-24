const User = require('../models/User');

// Block a User
exports.blockUser = async (req, res) => {
    try {
        let user = await User.findById(req.user.userId);
        user.blockedUsers.push(req.params.blockedUserId);
        await user.save();
        res.status(200).json({ message: 'User blocked' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Report a User
exports.reportUser = async (req, res) => {
    const { reason } = req.body;
    try {
        // In real-world applications, reports should be handled by an admin system
        console.log(`User ${req.user.userId} reported ${req.params.reportedUserId} for: ${reason}`);
        res.status(200).json({ message: 'User reported' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
