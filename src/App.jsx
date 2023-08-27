import './App.css'
import { useState, useEffect } from 'react'
import Form from './Form.jsx';
import Cards from './Cards.jsx';






// app function
function App() {


  // request to the server
  const Request = async () => {

    await fetch("http://localhost:8080/api/list")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

  }


  //use effect create a function
  useEffect(() => {
    Request()
  }, [])




  return (
    <>
      <img src="src/assets/hamza.jpeg" className="card-img-top" alt="..." />
    
      <Form />
      <Cards />
    </>
  )
}

export default App
