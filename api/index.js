const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./src');

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen()
    .then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
    });