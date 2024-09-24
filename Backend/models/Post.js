const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    content: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    comments: [{
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        comment: String,
        createdAt: { type: Date, default: Date.now },
    }],
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
