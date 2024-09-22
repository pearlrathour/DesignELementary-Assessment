const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true,
        enum: ['Work', 'Personal', 'Shopping', 'Meeting', 'Others']
    },
    description: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    contactno: {
        type: Number,
        // required: true
    },
    sms: {
        type: String,
        required: true
    },
    repeat:{
        type: String,
        enum: ['2 days', '5 days', '7 days', 'No Repeat'],
        default: 'No Repeat'
    },
    enable: {
        type: Boolean
    }
});

module.exports = mongoose.model('Task', TaskSchema);