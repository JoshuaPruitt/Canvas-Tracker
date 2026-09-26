import { StrictMode } from 'react'
import { ApolloProvider } from "@apollo/client/react";
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import client from "./graphql.ts";

import './index.css'


const root = createRoot(document.getElementById('root')! as HTMLElement);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
  </StrictMode>
);

export default client;