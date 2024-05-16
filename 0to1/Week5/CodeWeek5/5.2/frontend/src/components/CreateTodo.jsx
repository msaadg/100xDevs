import { useState } from "react";

export function CreateTodo() {
    // local state variables
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;
            setTitle(value);
        }} /><br />
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(value);
        }} /><br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    // title: document.getElementById("title").innerHTML,
                    // description: document.getElementById("description").innerHTML
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async function(res) {
                const json = await res.json();
                alert("Todo created!")
            })
        }}> Create Todo </button>
    </div>
}