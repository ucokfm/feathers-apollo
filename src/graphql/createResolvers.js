/* eslint-disable no-unused-vars */
module.exports = function (app) {
  const productService = app.service('products');
  const userService = app.service('users');

  return {
    Product: {
      owner: async (parent, args, context, info) => {
        if (parent.ownerId) {
          return userService.get(parent.ownerId);
        }
      },
    },
    User: {
      products: async (parent, args, context, info) => {
        return (await productService.find({ query: { ownerId: parent.id } }))
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
        return productService.create(args);
      },
      updateProduct: async (parent, args, context, info) => {
        const { id, ...others } = args;
        return productService.update(id, others);
      },
      patchProduct: async (parent, args, context, info) => {
        const { id, ...others } = args;
        return productService.patch(id, others);
      },
    },
  };
};
