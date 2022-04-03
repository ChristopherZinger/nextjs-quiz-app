import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro'
import { resolvers , Question} from "@generated/type-graphql" 
import { buildSchemaSync, Query, Resolver } from 'type-graphql';
import { createContext } from '../../lib/context'
import Cors from 'micro-cors'
import path from 'path';


const schemaPath = path.resolve(__dirname, './../../generated/schema/schema.gql')
export const schema = buildSchemaSync({
  resolvers,
  validate: false,
  emitSchemaFile: schemaPath 
})
console.log('schema was generated at: ', schemaPath)

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