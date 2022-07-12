import { pets } from './pets'

export const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        saludo: (root, {name}) => `Hola ${name}!`,
        pets: () => pets
    },
    Mutation: {
        createPet: (_, {input}) => {
            const pet = {
                _id: pets.length + 1,
                ...input
            }
            pets.push(pet)
            return pet
        }
    }
}