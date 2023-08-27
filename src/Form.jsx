import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Form() {



    const [data, setData] = useState("")



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch("http://localhost:8080/api/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    task: data,
                    completed: false,
                    systemDate: "yeni tarih",
                }),
            });

        } catch (err) {
            console.log(err);
        }
        setData("")
    };

    return (

        <div className="card">

            <h1>ToDoo</h1>
            <input value={data} onChange={(e) => setData(e.target.value)} type="email" autoComplete="off"
                className="form-control" id="exampleFormControlInput1"
                placeholder="You gotta add a few tasks first, you know?" />
            <button type="button" onClick={(e) => { handleSubmit(e) }} className="mt-3 btn btn-primary">Add</button>

        </div>
    )

}
