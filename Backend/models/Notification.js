const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    activity: {
        type: String,
        required: true,
    },
    read: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Notification', notificationSchema);
