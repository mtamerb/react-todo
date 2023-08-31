import { createContext,useContext,useState } from "react";
const TodoContext=createContext();
const TodoProvider=({children})=>{
    const [todos,setTodos]=useState([]);
    const [status,setStatus]=useState("");
    const [filteredTodos,setFilteredTodos]=useState();
    const [checked, setChecked] = useState();
    const Values={todos,setTodos,status,setStatus,filteredTodos,setFilteredTodos}
    

    return(<TodoContext.Provider value={Values}>{children}</TodoContext.Provider>)
}
const useTodo=()=>useContext(TodoContext)
export{TodoProvider,useTodo}