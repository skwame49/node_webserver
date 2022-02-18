const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    phone_number: {
        type: String
    },
    gender: {
        type: String
    },
})

const userModel = mongoose.model('user', userSchema);
model.exports = userModel;