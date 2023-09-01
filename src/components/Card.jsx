
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTodo } from "./Todocontext";
import { requestDelete, requestCheck, requestUpdate } from "./API";

function Card({ item }) {
   
    const { setTodos} = useTodo();




    //DELETE
    const handleDelete =  (id) => {
        requestDelete(id, setTodos);

    }


    //UPDATE
    const handleUpdate =  (id) => {
        requestUpdate(id, item, setTodos);

    }



    // update todo api completed status
    const handleUpdateCheck =  (index) => {
     
        requestCheck(index, setTodos)

     

    }





    console.log(item.completed);
    return (

        <div className={`note ${item.completed ? "text-line":""}`} id={item.id} >

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