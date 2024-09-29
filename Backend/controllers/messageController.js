const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  try {
    const newMessage = new Message({
      chat_id: req.params.chatId,
      sender_id: req.user.id,
      message_text: req.body.message_text
    });
    const message = await newMessage.save();
    res.status(201).json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
