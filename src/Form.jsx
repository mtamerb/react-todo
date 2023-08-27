import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Form() {

    return (

        <div className="card">

            <h1>ToDoo</h1>
            <input type="email" autoComplete="off" class="form-control" id="exampleFormControlInput1"
                placeholder="You gotta add a few tasks first, you know?" />
            <button type="button" class="mt-3 btn btn-primary">Add</button>

        </div>
    )

}
