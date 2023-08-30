import './assets/css/App.sass'
import { useEffect } from 'react'
import Form from './Form.jsx';
import Cards from './Cards.jsx';
import { useTodo } from './Todocontext';


// app function
function App() {

  const { setTodos } = useTodo();


  // request to the server
  const Request = async () => {

    await fetch("http://localhost:8080/api/list")
      .then((response) => response.json())
      .then((data) => setTodos(data.reverse()))
      .catch((error) => console.log(error));

  }


  //use effect create a function
  useEffect(() => {
    Request()
  }, [])





  return (
    < >
      <Form />
      <Cards />
    </>
  )
}

export default App
