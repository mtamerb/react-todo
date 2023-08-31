

// GET LİST
export async function requestList(setTodos) {

    await fetch("http://localhost:8080/api/list")
        .then((response) => response.json())
        .then((data) => setTodos(data))
        .catch((error) => console.log(error));

}



// CREATE
export async function requestCreate(data) {

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

    } catch (err) {
        console.error(err);
    }

}

// DELETE 
export async function requestDelete(id, setTodos) {
    await fetch("http://localhost:8080/api/delete/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((error) => console.log(error))
}


// UPDATE CHECK
export async function requestCheck(index, setTodos) {
    console.log(index.completed)
    await fetch("http://localhost:8080/api/update/check/" + index.id + "/" + !index.completed, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            task: index.task,
            completed: !index.completed,
            systemDate: new Date().toISOString(),
        }),
    })

        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((error) => console.log(error))

}
export async function requestDeleteAll(setTodos) {
    console.log("delete all")
    await fetch("http://localhost:8080/api/deleteAll", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
        .then((res) => res.json())
        .then((data) => setTodos(data))
        .catch((error) => console.log(error))
       
}


// UPDATE TASK
export async function requestUpdate(id, item, setTodos) {

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