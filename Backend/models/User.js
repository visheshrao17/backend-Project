const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    googleLogin: {
        type: Boolean,
        default: false,
    },
    bio: {
        type: String,
        default: '',
    },
    portfolio: {
        type: String,
        default: '',
    },
    skills: {
        type: [String],
        default: [],
    },
    blockedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
