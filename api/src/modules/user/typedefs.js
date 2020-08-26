const { gql } = require('apollo-server');

const typeDef = gql`
    extend type User {
        id: ID
        name: String
    }
    extend type Query {
        users: [User]
    }
`;

module.exports = typeDef;