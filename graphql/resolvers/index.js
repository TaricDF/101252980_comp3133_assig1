const bcyrpt = require('bcryptjs');

const Listing = require('../../models/listing');
const User = require('../../models/user');

const listings = async listingIds => {
    try {
        const listings = await Listing.find({_id: {$in: listingIds}})
            listings.map(listing => {
                return { 
                    ...listing._doc, 
                    _id: listing.id, 
                    creator: user.bind(this, listing.creator)
                };
            });
        return listings;
    } 
    catch(err) {
        throw err;
    }
};

const user = async userId => {
    try {
        const user = await User.findById(userId)
            return { 
                ...user._doc, 
                _id: user.id, 
                createdListings: listings.bind(this, user._doc.createdListings) 
        };
    }
    catch(err) {
        throw err;
    }
};

module.exports = {
    listings: async () => {
        try {
        const listings = await Listing.find()
            return listings.map(listing => { 
                return { 
                    ...listing._doc, 
                    _id: listing.id, 
                    creator: user.bind(this, listing._doc.creator)
                };
            })
        }
        catch(err) {
            throw err;
        }
    },
    createListing: async (args) => {
        const listing = new Listing({
            listing_id: args.listingInput.listing_id,
            listing_title: args.listingInput.listing_title,
            description: args.listingInput.description,
            price: args.listingInput.price,
            street: args.listingInput.street,
            city: args.listingInput.city,
            postal_code: args.listingInput.postal_code,
            email: args.listingInput.email,
            username: args.listingInput.username,
            creator: '621bfcf03b2475b3babde9b6'
        });
        let createdListings;
        try {
            const result = await listing
            .save()
                createdListings = { ...result._doc, _id: result._doc._id.toString(), creator: user.bind(this, result._doc.creator) };
                const creator = await User.findById('621bfcf03b2475b3babde9b6')                
                if(!creator) {
                    throw new Error('User not found.')
                }
                creator.createdListings.push(listing);
                await creator.save();
                return createdListings;
        }
        catch(err) {
            console.log(err);
            throw err;
        }
    },
    createUser: async (args) => {
        try {
            const existingUser = await User.findOne({username: args.userInput.username})
            if(existingUser) {
                throw new Error('Username exists already.')
            }
            const hashedPassword = await bcyrpt.hash(args.userInput.password, 12)


            const user = new User({
                email: args.userInput.email,
                password: hashedPassword,
                username: args.userInput.username,
                firstname: args.userInput.firstname,
                lastname: args.userInput.lastname,
                type: args.userInput.type
            })
            const result = await user.save();


            return { ...result._doc, password: null, _id: result._doc._id.toString() }
        }
        catch(err) {
            throw err;
        }
    }
}