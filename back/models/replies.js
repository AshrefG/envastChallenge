const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    content: {
        type: String,
        required: false
    },
    ticket_id: {
        type: String,
        required: false
    },
    user_id: {
        type: String,
        required: false
    }

}, { timestamps: true });
  


module.exports = mongoose.model('Replies', replySchema);
