import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from "./Buttons.jsx";

export default function Form() {

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
        try {
            const response = await fetch("http://localhost:8080/api/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    task: data,
                    completed: false,
                    systemDate: new Date().toISOString(),
                }),
            });

            if (!response.ok) {
                throw new Error("HTTP Hata: " + response.status);
            }

            setData("");
        } catch (err) {
            console.error(err);
        }

    };

  console.log("form rendered");

    return (

        <div className="card">

            <h1>TODO</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input maxLength={250} value={data} onChange={(e) => setData(e.target.value)} type="text" autoComplete="off"
                    className="form-control" id="exampleFormControlInput1"
                    placeholder="Press ctrl + enter" />
            </form>

            <Buttons />




        </div>
    )

}
