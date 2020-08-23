const { gql } = require('apollo-server');

const typeDef = gql`
    type User {
        id: ID!
        email: String!
        name: String!
    }
    extend type Query {
        user: User!
    }
`;

module.exports = typeDef;