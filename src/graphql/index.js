const { ApolloServer } = require('apollo-server');
const { registerServer } = require('apollo-server-express');

const typeDefs = require('./typeDefs');
const createResolvers = require('./createResolvers');

module.exports = function (app) {
  const resolvers = createResolvers(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  registerServer({ server, app });
};
