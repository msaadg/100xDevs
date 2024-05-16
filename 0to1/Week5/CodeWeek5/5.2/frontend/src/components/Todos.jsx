export function Todos({todos}) {
    
    return <div>
        {todos.map(function(todo) {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => {
                    fetch("http://localhost:3000/completed", {
                        method: "PUT",
                        body: JSON.stringify({
                            id: todo._id
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(async function(res) {
                        const json = await res.json();
                    })
                }}> {todo.completed ? "Completed" : "Mark as Completed"} </button>
            </div>
        })}
    </div>
}