import './assets/css/App.sass'
import { useEffect } from 'react'
import Form from './Form.jsx';
import Cards from './Cards.jsx';
import { useTodo } from './Todocontext';
import Buttons from './Buttons';
import {requestList}  from './API.jsx';

// app function
function App() {
const {todo,setTodos}=useTodo();



  // request to the server
  
  //use effect create a function
  useEffect(() => {
  requestList(setTodos);
  },[])




  return (
    < >
      <Form />
      <Buttons/>
      <Cards />
    </>
  )
}

export default App
