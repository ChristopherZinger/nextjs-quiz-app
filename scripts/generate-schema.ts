import { emitSchemaDefinitionFileSync} from 'type-graphql'; 
import { schema } from '../pages/api/graphql'

emitSchemaDefinitionFileSync('./generated/schema/schema.gql', schema);