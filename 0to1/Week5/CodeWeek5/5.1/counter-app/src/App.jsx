// hook
import { useState } from 'react'

// state, components

// this is not the correct way
// let state = {
//   count: 0
// }

// function App() {
//   const [count, setCount] = useState(0)     // [state, setState]

//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>
//   )
// }

// // component
// function CustomButton(props) {
  
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>
//     Counter {props.count}
//   </button>
// }

function App() {      // global state
  const [todos, setTodos] = useState([{
    title: 'Learn React',
    description: 'Learn React Hooks',
    completed: false
  }, {
    title: 'Learn Redux',
    description: 'Learn Redux Hooks',
    completed: false
  },]);

  function addTodo() {
    const newTodo = {
      title: 'Random Todo',
      description: 'Random Todo Description',
      completed: false
    }

    // [1, 2]
    // [...todos, newTodo] => [1, 2, newTodo]   // spread operator
    setTodos([...todos, newTodo])
  }

  return (
    <div>
      <button onClick={addTodo}> Add a random todo </button>
      {
        todos.map(function(todo) {
          return <Todo title={todo.title} description={todo.description} completed={todo.completed}/>
        })
      }
      <DummmyButton></DummmyButton>
    </div>
  )
}

function DummmyButton() {   // component
  console.log('dummy button')
  return <button>Click me</button>
}

function Todo(props) {      // component
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <p>{props.completed}</p>
  </div>
}

export default App
