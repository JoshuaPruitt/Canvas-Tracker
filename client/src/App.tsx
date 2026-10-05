import { gql } from '@apollo/client';
import { useMutation } from '@apollo/client/react';
import './App.css'

// import { addMocksToSchema } from '@graphql-tools/mock';
// import { makeExecutableSchema } from '@graphql-tools/schema';
const CREATE_ITEM = gql`
  mutation CreateItem($name: String!, $value: Int) {
    createItem(name: $name, value: $value) {
      id
      name
    }
  }
`;

// const DisplayTest: any = () => {
//   const { loading, error, data}: any = useQuery(GET_HELLO);

//   if (loading) return <p>...loading</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return <h1>{data.hello}</h1>;
// }

function MyComponent() {
  const [createItem] = useMutation(CREATE_ITEM);

  const handleSubmit = (name: any, value: any) => {
    createItem({ variables: { name, value } });
  };

  return <button onClick={() => handleSubmit('foo', 42)}>Submit</button>;
}

function App() {
  return (
    <>
        <MyComponent></MyComponent>
    </>
  )
};

export default App
