import { gql } from '@apollo/client';
import './App.css'
import client from './graphql.ts';
import { useState, useEffect } from 'react';


function App() {
  const [requests, setRequest] = useState<unknown[] | string[]>([''])

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
    client.query({ query: GET_HELLO}).then((result) => {
      const data = result.data;
      console.log(data) // DEBUGx

      if (data!) return []; //return empty if no data

      return setRequest([...requests, result.data])
    });
  }

  return (
    <>
      <button type='button' onClick={GetQuery}>Submit</button>
      
      <div>
        { //Map requests on page
          requests.map((request: any, i) => {
            console.log(`mapping request... ${request}`) // DEBUG
            return (<h2 key={i}>{request}</h2>)
          })
        }
      </div>
    </>
  )
};

export default App
