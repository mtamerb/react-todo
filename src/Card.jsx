
import { useState } from "react";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTodo } from "./Todocontext";
import { requestDelete, requestList, requestCheck, requestUpdate } from "./API";

function Card({ item }) {

    const { setTodos, todos } = useTodo();
    const [checked, setChecked] = useState(false);




    //DELETE
    const handleDelete = async (id) => {
        requestDelete(id, setTodos);

    }


    //UPDATE
    const handleUpdate = async (id) => {
        requestUpdate(id, item, setTodos);

    }



    // update todo api completed status
    const handleUpdateCheck =  (index) => {
     
        requestCheck(index, setTodos)

     

    }





    console.log(item.completed);
    return (

        <div className="cars" id={item.id}>

            <div className="option">
                <input type="checkbox" className="checkbox" onClick={() => handleUpdateCheck(item)} defaultChecked={item.completed} />
                <FontAwesomeIcon icon={faPenToSquare} beat size="2x" className="edit" onClick={() => handleUpdate(item.id)} />
                <FontAwesomeIcon icon={faTrash} size="2x" beat className="trash" onClick={() => handleDelete(item.id)} />
            </div>
            {item.task}

        </div>
    );
}

export default Card;