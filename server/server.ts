import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Test type defs REMOVE LATER
const typeDefs = `
`;

// Test Resolvers REMOVE LATER
const resolvers =  {
    Query: {
        hello: () => 'world',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server)
console.log(`Server Ready at ${url}`);