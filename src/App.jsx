import './assets/sass/App.sass'
import { useEffect ,useState} from 'react'
import Form from './components/Form.jsx';
import Cards from './components/Cards.jsx';
import { useTodo } from './components/Todocontext';
import Buttons from './components/Buttons';
import {requestList}  from './components/API.jsx';

// app function
function App() {

const {setTodos}=useTodo();


  useEffect(() => {
  requestList(setTodos);
  },[])


  return (
    < >
      <Form />
      <Buttons/>
      <Cards   />
    </>
  )
}

export default App
