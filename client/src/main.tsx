import { ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const client = new ApolloClient({
  link: new HttpLink({uri: 'http://localhost:5173/apollo'}),
  cache: new InMemoryCache()
});

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
);

export default client;