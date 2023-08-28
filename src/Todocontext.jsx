import { createContext,useContext,useState } from "react";
const TodoContext=createContext();
const TodoProvider=({children})=>{
    const [todos,setTodos]=useState([]);

    const Values={todos,setTodos}

    return(<TodoContext.Provider value={Values}>{children}</TodoContext.Provider>)
}
const useTodo=()=>useContext(TodoContext)
export{TodoProvider,useTodo}