const Message = require('../models/Message');

// Send a Message
exports.sendMessage = async (req, res) => {
    const { content, receiverId } = req.body;
    try {
        const newMessage = new Message({
            sender: req.user.userId,
            receiver: receiverId,
            content,
        });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get Messages between two users
exports.getMessages = async (req, res) => {
    const { receiverId } = req.params;
    try {
        const messages = await Message.find({
            $or: [
                { sender: req.user.userId, receiver: receiverId },
                { sender: receiverId, receiver: req.user.userId },
            ],
        }).sort({ createdAt: 1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
