const db = require('../../db/db.json');

const resolvers = {
    Query: {
        feed: () => {
            return db.feed;
        }
    },
    Feed: {
        users: parent => {
            return db.users.filter(({ id }) => {
                return parent.users.includes(id);
            });
        }
    }
};

module.exports = resolvers;