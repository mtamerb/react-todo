import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/sass/Index.sass'
import { TodoProvider } from './components/Todocontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
   <TodoProvider>
  <App />
   </TodoProvider>
  
)
