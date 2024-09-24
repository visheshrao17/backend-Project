const User = require('../models/User');

// Create or Update User Profile
exports.createOrUpdateProfile = async (req, res) => {
    const { bio, portfolio, skills } = req.body;
    try {
        let user = await User.findById(req.user.userId);
        user.bio = bio || user.bio;
        user.portfolio = portfolio || user.portfolio;
        user.skills = skills || user.skills;
        await user.save();
        res.status(200).json({ message: 'Profile updated', user });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get User Profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: 'User not found' });
    }
};
