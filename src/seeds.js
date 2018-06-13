module.exports = async function (app) {
  const userService = app.service('users');
  const userResult = await userService.find();
  if (userResult.total === 0) {
    await userService.create([
      { id: 1, email: 'john@example.com', password: 'john123', fullName: 'John Doe', dateOfBirth: '1991-01-11' },
      { id: 2, email: 'jane@example.com', password: 'jane123', fullName: 'Jane Doe', dateOfBirth: '1992-02-22' },
      { id: 3, email: 'richard@example.com', password: 'richard123', fullName: 'Richard Roe', dateOfBirth: '1993-03-23' },
    ]);
  }
  const productService = app.service('products');
  const productResult = await productService.find();
  if (productResult.total === 0) {
    await productService.create([
      { id: 1, name: 'Product A', price: 1000, ownerId: 1 },
      { id: 2, name: 'Product B', price: 2000, ownerId: 1 },
      { id: 3, name: 'Product C', price: 3000, ownerId: 1 },
      { id: 4, name: 'Product D', price: 4000, ownerId: 2 },
      { id: 5, name: 'Product E', price: 5000, ownerId: 2 },
      { id: 6, name: 'Product F', price: 6000, ownerId: 3 },
    ]);
  }
};
