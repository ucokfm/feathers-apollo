/* eslint-disable no-unused-vars */
module.exports = function (app) {
  const productService = app.service('products');
  const userService = app.service('users');

  return {
    Product: {
      owner: async (parent, args, context, info) => {
        return userService.get(parent.owner);
      },
    },
    User: {
      products: async (parent, args, context, info) => {
        return (await productService.find({ query: { owner: parent.id } }))
          .data;
      },
    },
    Query: {
      products: async (parent, args, context, info) => {
        return (await productService.find()).data;
      },
      product: async (parent, args, context, info) => {
        return productService.get(args.id);
      },
      users: async (parent, args, context, info) => {
        return (await userService.find()).data;
      },
      user: async (parents, args, context, info) => {
        return await userService.get(args.id);
      },
    },
    Mutation: {
      createProduct: async (parent, args, context, info) => {
        return (await productService.create(args));
      },
    },
  };
};
