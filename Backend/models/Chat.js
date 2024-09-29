const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  user1_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  user2_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', ChatSchema);
