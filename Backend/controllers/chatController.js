const Chat = require('../models/Chat');

exports.createChat = async (req, res) => {
  try {
    const newChat = new Chat({
      user1_id: req.user.id,
      user2_id: req.body.user2_id
    });
    const chat = await newChat.save();
    res.status(201).json(chat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

