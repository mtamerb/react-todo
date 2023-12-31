import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card.jsx";
import { useTodo } from "./Todocontext.jsx";
import { requestDeleteAll } from "./API.jsx";
export default function Cards() {


    const { todos, filteredTodos, setFilteredTodos, status, setTodos } = useTodo();


    useEffect(() => {
        
        switch (status) {
            case "Done":
                setFilteredTodos(todos.filter((item) => item.completed === true));
                break;

            case "Clear":
                requestDeleteAll(setTodos)
                console.log("clear" )
                setFilteredTodos(todos);
                break;

            case "Todo":
                setFilteredTodos(todos.filter((item) => item.completed === false));
                break;

            case "All":
                setFilteredTodos(todos);
                break;
        }

    }, [status,todos])


  

    return (

        <div className="note-list">
            {
                (filteredTodos ? filteredTodos : todos).map((item, key) =>
                    <Card key={key} item={item}  />
                )}

        </div>
    )

}

