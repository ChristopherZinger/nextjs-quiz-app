import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro'
import { resolvers } from "@generated/type-graphql";
import Cors from 'micro-cors'
import { buildSchemaSync } from 'type-graphql';
import { createContext } from './context'

const schema = buildSchemaSync({
  resolvers,
  validate: false
})
const apolloServer = new ApolloServer({schema, context: createContext})
const startServer = apolloServer.start()
const cors = Cors()

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}