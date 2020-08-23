const { gql } = require('apollo-server');

const typeDef = gql`
    type Feed {
        id: ID!
        type: String!
    }
    extend type Query {
        feed: Feed!
    }
`;

module.exports = typeDef;