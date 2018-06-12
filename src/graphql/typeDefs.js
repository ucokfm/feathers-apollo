const { gql } = require('apollo-server');

module.exports = gql`
  type Product {
    id: Int,
    name: String,
    price: Int
    owner: User
  }

  type User {
    id: Int,
    name: String,
    dateOfBirth: String
    products: [Product]
  }

  type Query {
    products: [Product],
    product(id: Int): Product,
    users: [User]
    user(id: Int): User,
  }

  type Mutation {
    createProduct(id: Int, name: String, price: Int): Product
  }
`;
