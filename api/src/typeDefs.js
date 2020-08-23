const { gql } = require('apollo-server');
const { user, feed } = require('./modules');

const Query = gql`
    type Query {
        _empty: String
    }
`;
module.exports = [Query, user.typeDefs, feed.typeDefs];
