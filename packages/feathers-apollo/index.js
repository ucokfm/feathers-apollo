module.exports = function (config) {
  console.log('config:', config);
  return function (app) {
    console.log('available services:', Object.keys(app.services));
  };
}
