const mongoose = require('mongoose');
const { Schema } = mongoose;

const privacySettingsSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    visibility: {
        type: String,
        enum: ['public', 'private', 'friends-only'],
        default: 'public',
    },
    blockedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    reportedUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
}, { timestamps: true });

module.exports = mongoose.model('PrivacySettings', privacySettingsSchema);
