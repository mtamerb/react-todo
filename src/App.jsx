import './assets/sass/App.sass'
import { useEffect } from 'react'
import Form from './components/Form.jsx';
import Cards from './components/Cards.jsx';
import { useTodo } from './components/Todocontext';
import Buttons from './components/Buttons';
import {requestList}  from './components/API.jsx';

// app function
function App() {
const {setTodos}=useTodo();



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
