import { gql } from '@apollo/client';
import './App.css'
import client from './graphql.ts';
import { useState } from 'react';


//test items, trying to get basic functionality
const GET_HELLO: any = gql`
  query {
    hello
  }
`

function MyComponent() {
  const [requestIndex, setRequest] = useState()

  const hello_query: any = () => {
    client.query({ query: GET_HELLO}).then((result) => console.log(result.data));
  }

  return <button onClick={hello_query}>Submit</button>;
}

function App() {
  return (
    <>
        <MyComponent></MyComponent>
    </>
  )
};

export default App
