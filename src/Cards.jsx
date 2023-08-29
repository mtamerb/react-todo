import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card.jsx";
import { useTodo } from "./Todocontext";

export default function Cards() {

    const { todos } = useTodo();
  
    console.log("cards rendered");
    return (

        <div className="card-list">
            {todos.map((item , key) =>
                <Card key = {key} item={item} />
            )}

            
        </div>
    )

}

