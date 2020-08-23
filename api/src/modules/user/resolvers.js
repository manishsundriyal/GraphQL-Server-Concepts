const resolvers = {
    Query: {
        user() {
            return {
                id: "3456789",
                name: 'Jamie',
                email: "Jamie@gmail.com"
            }
        }
    }
};

module.exports = resolvers;