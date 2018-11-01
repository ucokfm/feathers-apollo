const { gql } = require('apollo-server');

module.exports = gql`
  type Product {
    id: Int
    name: String
    price: Int
    owner: User
  }

  type User {
    id: Int
    fullName: String
    dateOfBirth: String
    products: [Product]
  }

  type Query {
    products: [Product]
    product(id: Int): Product
    users: [User]
    user(id: Int): User
  }

  type Mutation {
    createProduct(id: Int, name: String!, price: Int!): Product
    updateProduct(id: Int!, name: String!, price: Int!): Product
    patchProduct(id: Int!, name: String, price: Int): Product
    removeProduct(id: Int!): Product
    createUser(email: String!, password: String!, fullName: String, dateOfBirth: String): User
    updateUser(id: Int!, fullName: String, password: String, dateOfBirth: String): User
    patchUser(id: Int!, fullName: String, password: String, dateOfBirth: String): User
    removeUser(id: Int!): User
  }
`;
