const mongooose = require('mongoose');
mongooose.connect('mongodb+srv://admin:melIMNJefhE7t0t0@cluster0.bulkj26.mongodb.net/todos');

const todoSchema = new mongooose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todos = mongooose.model('todos', todoSchema);

module.exports = {
    todos
}