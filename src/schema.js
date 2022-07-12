import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
    type Query {
        hello: String
        saludo(name: String!): String
        pets: [Pet]
    }

    type Pet {
        _id: ID
        name: String
        age: Int
        breed: String
        color: String
    }

    type Mutation {
        createPet(input: PetInput): Pet
    }

    input PetInput {
        name: String
        age: Int
        breed: String
        color: String
    }
`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})