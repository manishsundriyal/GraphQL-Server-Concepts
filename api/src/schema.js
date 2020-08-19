const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Query {
        user: User!
    }
`;

module.exports = typeDefs;
