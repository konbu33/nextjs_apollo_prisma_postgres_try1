import { ApolloServer } from 'apollo-server'
import todo from './prisma/todo'

const typeDefs = `
  type Todo {
    id: ID
  } 

  type Query {
    todo: [Todo] 
  }
`

const resolvers = {
  Query: {
    todo: todo
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen( { port: 4000}, () => {
  console.log('server start: ')
})
