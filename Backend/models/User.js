const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_photo: String,
  bio: String,
  skills: [String],
  user_type: { type: String, enum: ['freelancer', 'client'], required: true },
  created_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', UserSchema);