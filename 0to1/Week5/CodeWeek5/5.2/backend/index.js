const {createTodo, updateTodo} = require('./types.js');
const {todos} = require('./db.js');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:5173'
// }));


// body {
//     title : string,
//     description : string
// }

app.get('/todos', async (req, res) => {
    const allTodos = await todos.find();
    res.json({
        todos: allTodos
    });
});

app.post('/todo', async (req, res) => {
    const newTodo = req.body;
    const parsedTodo = createTodo.safeParse(newTodo);
    if (!parsedTodo.success) {
        res.status(400).json({
            msg: 'Invalid todo'
        })
        return;
    }
    // put it in mongodb
    await todos.create({
        title: newTodo.title,
        description: newTodo.description,
        completed: false
    })

    res.status(201).json({
        msg: 'Todo created'
    })
});

app.put('/completed', async (req, res) => {
    const todoIdObj = req.body;
    const parsedTodoIdObj = updateTodo.safeParse(todoIdObj);
    if (!parsedTodoIdObj.success) {
        res.status(400).json({
            msg: 'Invalid todo'
        })
        return;
    }

    await todos.updateOne({
        _id: todoIdObj.id
    }, {
        completed: true
    });

    res.status(201).json({
        msg: 'Todo updated'
    })
});

app.listen(3000)