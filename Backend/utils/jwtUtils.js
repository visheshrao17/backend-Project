const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.generateToken = (userId) => {
  console.log('JWT Secret:', process.env.JWT_SECRET);
  return jwt.sign({ user: { id: userId } }, process.env.JWT_SECRET, { expiresIn: '1h' });
};
