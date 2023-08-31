import React from 'react';

import { useTodo } from './Todocontext';


export default function Buttons() {
const {setStatus}=useTodo();

    return (
        <div className='buttons'>

            <button type='button' className='btn btn-primary' onClick={()=>setStatus("All")}>All</button>
            <button type='button' className='btn btn-secondary' onClick={()=>setStatus("Done")}>Done</button>
            <button type='button' className='btn btn-success' onClick={()=>setStatus("Todo")} >Todo</button>
            <button type='button' className='btn btn-danger' onClick={()=>setStatus("Clear")}>Clear</button>

           
        </div>
    )


}


