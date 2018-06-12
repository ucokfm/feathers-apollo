module.exports = async function (app) {
  const productService = app.service('products');
  const productResult = await productService.find();
  if (productResult.total === 0) {
    productService.create([
      { id: 1, name: 'Product A', price: 1000 },
      { id: 2, name: 'Product B', price: 2000 },
      { id: 3, name: 'Product C', price: 3000 },
    ]);
  }
};
