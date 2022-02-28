const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
        listing: {
            type: Schema.Types.ObjectId,
            ref: "Listing"
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        booking_date: {
            type: String
        },
        booking_start: {
            type: String
        },
        booking_end: {
            type: String
        },
        booking_id: {
            type: String
        }
        
    }, 
    { timestamps: true }
);

module.exports = mongoose.model('Booking', bookingSchema);