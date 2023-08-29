
import { useState } from "react";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import randomColor from "randomcolor";
import { useTodo } from "./Todocontext";

function Card({ item }) {

    const { setTodos } = useTodo();

    const [complete, setComplet] = useState(item.completed);

    let color = randomColor();


    //DELETE
    const handleDelete = async (id) => {

        await fetch("http://localhost:8080/api/delete/" + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())
            .then((data) => setTodos(data))
            .catch((error) => console.log(error))
    }


    //UPDATE
    const handleUpdate = async (id) => {
        const task = prompt("Please update your task", item.task);

        await fetch("http://localhost:8080/api/update/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                task: task,
                systemDate: new Date().toISOString(),
            }),
        })
            .then((res) => res.json())
            .then((data) => setTodos(data))
            .catch((error) => console.log(error))
    }



    // update todo api completed status
    const handleUpdateCheck = async (index) => {

        //update/check/{taskID}/{completed}

        console.log(index)

        await fetch("http://localhost:8080/api/update/check/" + index.id + "/" + !index.completed, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                task: index.task,
                completed: index.completed,
                systemDate: new Date().toISOString(),
            }),
        })

            .then((res) => res.json())
            .then((data) => setTodos(data) )
            .catch((error) => console.log(error))

        setComplet(!index.completed)
    }
    console.log("card rendered");
    return (
        <div style={{ backgroundColor: color }} className="cars" id={item.id}>
            <div className="option">
                {/* {item.completed ? (
                    <AiFillCheckSquare className="check" />
                ) : (
                    <RiCheckboxBlankLine className="check" />
                )} */}
                <input type="checkbox" className="checkbox" onChange={() => handleUpdateCheck(item)} checked={complete} />
                <FontAwesomeIcon icon={faPenToSquare} beat size="2x" className="edit" onClick={() => handleUpdate(item.id)} />
                <FontAwesomeIcon icon={faTrash} size="2x" beat className="trash" onClick={() => handleDelete(item.id)} />
            </div>
            {item.task}
        </div>
    );
}

export default Card;