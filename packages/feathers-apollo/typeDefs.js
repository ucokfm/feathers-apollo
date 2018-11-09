const { gql } = require('apollo-server-express');

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
    productFind: [Product]
    productGet(id: Int): Product
    userFind: [User]
    userGet(id: Int): User
  }

  type Mutation {
    productCreate(id: Int, name: String!, price: Int!): Product
    productUpdate(id: Int!, name: String!, price: Int!): Product
    productPatch(id: Int!, name: String, price: Int): Product
    productRemove(id: Int!): Product
    userCreate(email: String!, password: String!, fullName: String, dateOfBirth: String): User
    userUpdate(id: Int!, fullName: String, password: String, dateOfBirth: String): User
    userPatch(id: Int!, fullName: String, password: String, dateOfBirth: String): User
    userRemove(id: Int!): User
  }
`;
