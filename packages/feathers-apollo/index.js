const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./typeDefs');
const createResolvers = require('./createResolvers');

module.exports = function (config) {
  console.log('config:', config);
  return function (app) {
    console.log('available services:', Object.keys(app.services));
    const resolvers = createResolvers({ config, app });
    const apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
      context: ({ req }) => ({ request: req }),
    });
    apolloServer.applyMiddleware({ app });
  };
}
