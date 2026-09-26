import { useQuery } from '@apollo/client/react';
import './App.css'
import GET_LOCATIONS from './components/test.tsx';

const DisplayTest: any = () => {
  const { loading, error, data}: any = useQuery(GET_LOCATIONS);

  if (loading) return <p>...loading</p>;
  if (error) return <p>Error: {error.message}</p>;

  return data.locations.map(({id, name, description}: any) => (
    <div>
      <h1>{id}</h1>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  ))
}

function App() {

  return (
    <>
      <DisplayTest/>
    </>
  )
}

export default App
