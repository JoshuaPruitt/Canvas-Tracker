import { gql } from '@apollo/client';
import './App.css'
import client from './graphql.ts';
import { useState, useEffect } from 'react';

interface Data {
  hello?: string;
}

interface Hello {
  id?: number,
  hello?: string
};

function App() {
  const [requests, setRequest] = useState<Hello[]>([{id: 1, hello: 'world'}])

  //Run the get request on startup
  useEffect(() => {
    GetQuery()
  }, []);

  // CHANGE LATER : Will be moved to seperate file soon. Is here for testing
  const GET_HELLO: any = gql`
    query {
      hello
    }
  `

  // Get the data from server and append to requests
  const GetQuery = () => {
    client.query({ query: GET_HELLO})
      .then((result) => {
        if (!result.data) return;
        
        const data: Data = result.data;
        console.log(result); // DEBUG

        const id: number = requests.length + 1
        return setRequest([...requests, {id: id, hello: data.hello}])
    });
  };

  return (
    <>
      <button type='button' onClick={GetQuery}>Submit</button>
      
      <div>
        { //Map requests on page
          requests.map((request: Hello, i) => {
            
            console.log(`mapping request... ${request.hello}`) // DEBUG
            return (<h2 key={i}>{request.hello}</h2>)
          })
        }
      </div>
    </>
  )
};

export default App
