import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:5173/apollo'}),
  cache: new InMemoryCache()
});

export default client;