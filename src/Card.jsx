import { AiFillCheckSquare, AiFillDelete } from "react-icons/ai";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import randomColor from "randomcolor";
import { useTodo } from "./Todocontext";



function Card({ item }) {

    const { setTodos } = useTodo();
    let color = randomColor();

    const handleDelete = async (id) => {

        await fetch("http://localhost:8080/api/delete/" + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())
            .then((data) => setTodos(data))
            .catch((error) => console.log(error))
    }

    return (
        <div style={{ backgroundColor: color }} className="cars" id={item.id}>
            <div className="option">
                {item.completed ? (
                    <AiFillCheckSquare className="check" />
                ) : (
                    <RiCheckboxBlankLine className="check" />
                )}
                <FontAwesomeIcon icon="fa-solid fa-trash" className="close" onClick={() => handleDelete(item.id)} />
                {/*<AiFillDelete className="close" onClick={() => handleDelete(item.id)} />
 */}            </div>
            {item.task}
        </div>
    );
}

export default Card;