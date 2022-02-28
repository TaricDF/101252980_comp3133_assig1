const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    listing_id: { 
        type: String,
        required: true
    },
    listing_title: { 
        type: String,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    price: { 
        type: String,
        required: true
    },
    street: { 
        type: String,
        required: true
    },
    city: { 
        type: String,
        required: true
    },
    postal_code: { 
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    username: { 
        type: String,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Listing', listingSchema);