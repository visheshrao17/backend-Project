const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  freelancer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: String,
  media_url: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);

