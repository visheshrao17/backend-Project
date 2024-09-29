const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const postRoutes = require('./routes/postRoutes');
const likeRoutes = require('./routes/likeRoutes');
const commentRoutes = require('./routes/commentRoutes');
const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

app.use(express.json());
app.use(morgan('dev'));

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/portfolio', portfolioRoutes);
app.use('/posts', postRoutes);
app.use('/likes', likeRoutes);
app.use('/comments', commentRoutes);
app.use('/chats', chatRoutes);
app.use('/messages', messageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
