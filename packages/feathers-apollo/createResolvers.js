/* eslint-disable no-unused-vars */
module.exports = function ({ config, app }) {
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
        return (await productService.find({ query: { ownerId: parent._id } }))
          .data;
      },
    },
    Query: {
      productFind: async (parent, args, context, info) => {
        return (await productService.find({ provider: 'rest', headers: context.request.headers })).data;
      },
      productGet: async (parent, args, context, info) => {
        return productService.get(args.id, { provider: 'rest', headers: context.request.headers });
      },
      userFind: async (parent, args, context, info) => {
        return (await userService.find({ provider: 'rest', headers: context.request.headers })).data;
      },
      userGet: async (parents, args, context, info) => {
        return await userService.get(args.id, { provider: 'rest', headers: context.request.headers });
      },
    },
    Mutation: {
      productCreate: async (parent, args, context, info) => {
        return productService.create(args, { provider: 'rest', headers: context.request.headers });
      },
      productUpdate: async (parent, args, context, info) => {
        const { id, ...others } = args;
        return productService.update(id, others, { provider: 'rest', headers: context.request.headers });
      },
      productPatch: async (parent, args, context, info) => {
        const { id, ...others } = args;
        return productService.patch(id, others, { provider: 'rest', headers: context.request.headers });
      },
      productRemove: async (parent, args, context, info) => {
        return productService.remove(args.id, { provider: 'rest' });
      },
      userCreate: async (parent, args, context, info) => {
        return userService.create(args, { provider: 'rest', headers: context.request.headers });
      },
      userUpdate: async (parent, args, context, info) => {
        const { id, ...others } = args;
        return userService.update(id, others, { provider: 'rest', headers: context.request.headers });
      },
      userPatch: async (parent, args, context, info) => {
        const { id, ...others } = args;
        return userService.patch(id, others, { provider: 'rest', headers: context.request.headers });
      },
      userRemove: async (parent, args, context, info) => {
        return userService.remove(args.id, { provider: 'rest', headers: context.request.headers });
      },
    },
  };
};
