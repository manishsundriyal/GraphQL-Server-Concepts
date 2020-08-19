const resolver = {
    Query: {
        user() {
            return {
                id: '123456789',
                username: 'jhondoe',
                email: 'jhondoe@gmail.com'
            }
        }
    }
};

module.exports = resolver;