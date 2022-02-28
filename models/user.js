const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    createdListings: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Listing'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);