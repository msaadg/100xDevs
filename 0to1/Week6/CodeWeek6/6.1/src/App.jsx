import React, { useEffect, useState } from 'react'

/////////////////////////////////////// State in LCA ///////////////////////////////////////

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title="Hello World 2" />
//       <Header title="Hello World 3" />
//     </div>
//   ) 
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState('Hello World 1')

//   function updateTitle() {
//     setTitle("Hello World " + Math.random())
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}> Update the title</button>
//       <Header title={title} />
//     </div>
//   )
// }

// function Header({title}) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }


//////////////////////////////// Memoization //////////////////////////////////////

// function App() {
//   const [title, setTitle] = useState('Hello World 1')

//   function updateTitle() {
//     setTitle("Hello World " + Math.random())
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}> Update the title</button>
//       <Header title={title} />
//       <Header title="Hello World 2" />
//       <Header title="Hello World 3" />
//       <Header title="Hello World 4" />
//     </div>
//   ) 
// }

// function Header({title}) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }

// const Header = React.memo(function({title}) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// });

/////////////////////////////////////// keys ///////////////////////////////////////

// let counter = 4;

// function App() {
//   const [todos, setTodos] = useState([{
//     id: 1,
//     title: 'Todo 1',
//     description: 'Description 1' 
//   }, {
//     id: 2,
//     title: 'Todo 2',
//     description: 'Description 2' 
//   }, {
//     id: 3,
//     title: 'Todo 3',
//     description: 'Description 3' 
//   }])

//   function addTodo() {
//     setTodos([...todos, {
//       id: counter++,
//       title: 'Todo ' + counter,
//       description: 'Description ' + counter
//     }])
//   }

//   return (
//     <div>
//       <button onClick={addTodo}> Add Todo</button>
//       {todos.map(todo => 
//         <Todo key={todo.id} title={todo.title} description={todo.description} />       // key is added here, key is always needed when we're re-rendering a list
//       )}
//     </div>
//   )
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }

/////////////////////////////////////// wrappers (not real) ///////////////////////////////////////

// function App() {
//   return <div>
//     <CardWrapper innerComponent={<TextComponent />} />
//     <CardWrapper innerComponent={<TextComponent2 />} />
//   </div>
// }

// function CardWrapper({innerComponent}) {
//   return <div style ={{border: '2px solid black'}}>
//     {innerComponent}
//   </div>
// }

// function TextComponent() {
//   return <div>
//     Hello World
//   </div>
// }

// function TextComponent2() {
//   return <div>
//     Hello World 2
//   </div>
// }

/////////////////////////////////////// wrappers (better way) ///////////////////////////////////////

// function App() {
//   return <div>
//     <CardWrapper>
//       <div>
//         Hello World
//       </div>
//     </CardWrapper>
//   </div>
// }

// function CardWrapper({children}) {
//   return <div style ={{border: '2px solid black'}}>
//     {children}
//   </div>
// }

/////////////////////////////////////// useEffect ////////////////////////////////////////////////

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch('https://sum-server.100xdevs.com/todos').then(
        async (response) => {
          const json = await response.json();
          setTodos(json.todos)
        }
      )
    }, 10000)
  }, [])

  return <div>
    {
      todos.map(todo =>
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      )
    }
  </div>
}

function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}

export default App
