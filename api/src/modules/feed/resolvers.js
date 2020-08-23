const resolvers = {
    Query: {
        feed() {
            return {
                id: "123",
                type: 'image'
            }
        }
    }
};

module.exports = resolvers;