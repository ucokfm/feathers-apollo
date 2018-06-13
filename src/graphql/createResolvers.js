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
        return (await productService.find({ provider: 'rest', headers: context.request.headers })).data;
      },
      product: async (parent, args, context, info) => {
        return productService.get(args.id, { provider: 'rest', headers: context.request.headers });
      },
      users: async (parent, args, context, info) => {
        return (await userService.find({ provider: 'rest', headers: context.request.headers })).data;
      },
      user: async (parents, args, context, info) => {
        return await userService.get(args.id, { provider: 'rest', headers: context.request.headers });
      },
    },
    Mutation: {
      createProduct: async (parent, args, context, info) => {
        return productService.create(args, { provider: 'rest', headers: context.request.headers });
      },
      updateProduct: async (parent, args, context, info) => {
        const { id, ...others } = args;
        return productService.update(id, others, { provider: 'rest', headers: context.request.headers });
      },
      patchProduct: async (parent, args, context, info) => {
        const { id, ...others } = args;
        return productService.patch(id, others, { provider: 'rest', headers: context.request.headers });
      },
      removeProduct: async (parent, args, context, info) => {
        return productService.remove(args.id, { provider: 'reset' });
      },
      createUser: async (parent, args, context, info) => {
        return userService.create(args, { provider: 'rest', headers: context.request.headers });
      },
      updateUser: async (parent, args, context, info) => {
        const { id, ...others } = args;
        return userService.update(id, others, { provider: 'rest', headers: context.request.headers });
      },
      patchUser: async (parent, args, context, info) => {
        const { id, ...others } = args;
        return userService.patch(id, others, { provider: 'rest', headers: context.request.headers });
      },
      removeUser: async (parent, args, context, info) => {
        return userService.remove(args.id, { provider: 'rest', headers: context.request.headers });
      },
    },
  };
};
