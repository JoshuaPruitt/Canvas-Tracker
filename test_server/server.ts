import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Test type defs REMOVE LATER
const typeDefs = `
    type Query {
        hello: String
    }
`;

// Test Resolvers REMOVE LATER
const resolvers =  {
    Query: {
        hello: () => 'world',
    },
};


async function startApolloServer (){
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });

    const { url } = await startStandaloneServer(server, {
        listen: {
            port: 4000
        },
    })
    
    console.log(`Server Ready at ${url}`);
}

startApolloServer()