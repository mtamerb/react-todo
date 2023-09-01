import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { requestCreate, requestList } from './API.jsx';
import { useTodo } from './Todocontext.jsx';


export default function Form() {

const {setTodos}=useTodo();

    // input focus
    const input = document.querySelector("input");
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && e.key === "Enter") {
            input.focus();
        }
    });


    const [data, setData] = useState("")

    // request to the server
    const handleSubmit = async (e) => {
        requestCreate(data);
        requestList(setTodos)
    };


    return (
        <div className="card">


            <h1>TODO</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input maxLength={250} value={data} onChange={(e) => setData(e.target.value)} type="text" autoComplete="off"
                    className="form-control" id="exampleFormControlInput1"
                    placeholder="Press ctrl + enter" />
            </form >

        </div >
    )

}
