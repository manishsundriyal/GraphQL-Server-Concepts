const { ApolloServer } = require('apollo-server');

const { schema} = require('./src');

const server = new ApolloServer({
    schema,
    context: () => {
        return {};
    }
});

server.listen()
    .then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
    });