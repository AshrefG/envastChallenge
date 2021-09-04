const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    category: {
        type: String,
        required: false
    },
    subject: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    }

}, { timestamps: true });
  


module.exports = mongoose.model('Ticket', ticketSchema);
