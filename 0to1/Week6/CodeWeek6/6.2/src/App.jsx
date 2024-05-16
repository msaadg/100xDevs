//////////////////////////////////////// useEffect ////////////////////////////////////////

// import { useEffect, useMemo, useState } from 'react'
// import axios from 'axios'

// function App() {
//   const [btn, setBtn] = useState(1)

//   return (
//     <>
//       <button onClick={() => setBtn(1)}> 1 </button>
//       <button onClick={() => setBtn(2)}> 2 </button>
//       <button onClick={() => setBtn(3)}> 3 </button>
//       <button onClick={() => setBtn(4)}> 4 </button>
//       <Todo id={btn} />
//     </>
//   )
// }

// function Todo({id}) {
//   const [todo, setTodo] = useState({})

//   useEffect(() => {
//     axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
//       .then(function(response) {
//         setTodo(response.data.todo)
//       })
//   }, [id])

//   return <div>
//     <h1>{todo.title}</h1>
//     <h5>{todo.description}</h5>
//   </div>
// }

// export default App

//////////////////////////////////////// useMemo ////////////////////////////////////////

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);

//   let count = useMemo(() => {       // we can also use useEffect here and another state variable finalValue, but when input changes, inputValue would re-render and then finalValue would also re-render causing an extra re-render
//     let finalCount = 0;
//     for (let i = 1; i <= inputValue; i++) {        // very expensive operation
//       finalCount += i;
//     }
//     return finalCount;
//   }, [inputValue])

//   return <div>
//     <input onChange={function(e) {
//       setInputValue(e.target.value);
//     }} placeholder={'Find sum from 1 to n'}></input>
//     <br />
//     Sum from 1 to {inputValue} is {count}            // Sum from 1 to {inputValue} is {finalValue}
//     <br />
//     <button onClick={() => setCounter(counter + 1)}>Counter ({counter})</button>
//   </div>
// }

// export default App


////////////////////////////////////////// useCallback ///////////////////////////////////////////////

// import { memo, useState, useCallback } from "react";

// function App() {
//   const [count, setCount] = useState(0)

//   const inputFunction = useCallback(() => {
//     console.log("hi there")
//   }, [])

//   return <div>
//     <ButtonComponent inputFunction={inputFunction} />
//     <button onClick={() => {
//       setCount(count + 1);
//     }}>Click me {count}</button>
//   </div>
// }

// const ButtonComponent = memo(({inputFunction}) => {
//   console.log("child render")

//   return <div>
//     <button>Button clicked</button>
//   </div>
// })

// export default App;


/////////////////////////////////////////// Custom Hooks ///////////////////////////////////////////

/// useTodo custom hook

import { useEffect, useState } from "react";

function useTodos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("")
      .then((res) => {
        setTodos(res.data.todos)
      })
  }, [])
}

function App() {
  const todos = useTodos();

  return <div>
    {todos}
  </div>
}