const { merge } = require('lodash');
const { user, feed } = require('./modules');

module.exports = merge(user.resolvers, feed.resolvers);