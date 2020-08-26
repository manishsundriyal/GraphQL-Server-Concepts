const { gql } = require('apollo-server');

const typeDef = gql`
    extend type Feed {
        id: ID
        type: String
        users: [User]
    }
    extend type Query {
        feed: [Feed]
    }
`;

module.exports = typeDef;