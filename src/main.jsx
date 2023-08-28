import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/Index.sass'
import { TodoProvider } from './Todocontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
   <TodoProvider>
  <App />
   </TodoProvider>
  
)
