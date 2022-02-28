const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Booking {
    listing: Listing!
    user: User!
    booking_id: String!
    booking_date: String!
    booking_start: String!
    booking_end: String!
}

type Listing {
    listing_id: String!
    listing_title: String!
    description: String!
    price: Float!
    street: String!
    city: String!
    postal_code: String!
    email: String!
    username: String!
    creator: User!
}

type User {
    _id: ID!
    email: String!
    password: String
    username: String!
    firstname: String!
    lastname: String!
    type: String!
    createdListing: [Listing!]
}

input ListingInput {
    listing_id: String!
    listing_title: String!
    description: String!
    price: Float!
    street: String!
    city: String!
    postal_code: String!
    email: String!
    username: String!
}

input UserInput {
    email: String!
    password: String
    username: String!
    firstname: String!
    lastname: String!
    type: String!
}

type RootQuery{
    listings: [Listing!]!
}

type RootMutation {
    createListing(listingInput: ListingInput): Listing
    createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`)