
import React from "react";


export default function UpdateCheck({ item }) {

    // update todo api completed status
    const handleUpdateCheck = async (id) => {
        await fetch("http://localhost:8080/api/updateCheck/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
        })

            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }

    return (
        <div style={{ backgroundColor: color }} className="cars" id={item.id}>
            <div className="option">
                {/* {item.completed ? (
                    <AiFillCheckSquare className="check" />
                ) : (
                    <RiCheckboxBlankLine className="check" />
                )} */}

                <UpdateCheck />
                <FontAwesomeIcon icon={faPenToSquare} beat size="2x" className="edit" onClick={() => handleUpdate(item.id)} />
                <FontAwesomeIcon icon={faTrash} size="2x" beat className="trash" onClick={() => handleDelete(item.id)} />
            </div>
            {item.task}
        </div>
    )
}