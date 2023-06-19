const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    name: String!
    age: Int
    email: String
  }

  type Query {
    getAllUsers: [User]
  }

  type Mutation {
    createUser(name: String!, age: Int!, email: String): User!

  }

`

module.exports = { typeDefs }