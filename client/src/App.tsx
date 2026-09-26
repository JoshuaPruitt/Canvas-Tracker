import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import './App.css'

// test schema ( REMOVE LATER )
const GET_HELLO = gql`
  query {
    hello
  }
`;

const DisplayTest: any = () => {
  const { loading, error, data}: any = useQuery(GET_HELLO);

  if (loading) return <p>...loading</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <h1>{data.hello}</h1>;
}

function App() {
  return (
    <>
        <DisplayTest/>
    </>
  )
};

export default App
