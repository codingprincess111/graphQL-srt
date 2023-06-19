const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')

const app = express()
const server = new ApolloServer({ typeDefs, resolvers})

const startApolloServer = async () => {
    await server.start()
    server.applyMiddleware({ app })
    app.listen( 3001, () => console.log("server running on port 3001"))
}

startApolloServer()