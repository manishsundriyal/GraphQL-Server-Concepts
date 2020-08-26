const db = require('../../db/db.json');

const resolvers = {
    Query: {
        users: () => {
            return db.users;
        }
    },
    User: {
        feed: parent => {
            return db.feed.filter(({ id }) => parent.feed === id);
        }
    }
};

module.exports = resolvers;