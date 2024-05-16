import { useContext, useState } from "react"
import { CountContext } from "./context"

function AppContextAPI(){
  const [count, setCount] = useState(0)

  return (
    <div>
        <CountContext.Provider value={[count, setCount]}>
            <Count />
        </CountContext.Provider>
    </div>
  )
}

function Count() {
    return <div>
        <CountRenderer />
        <Buttons />
    </div>
}

function CountRenderer() {
    const count = useContext(CountContext);

    return <div>
        {count}
    </div>
}

function Buttons() {
    const [count, setCount] = useContext(CountContext);

    return <div>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increment</button>

        <button onClick={() => {
            setCount(count - 1)
        }}>Decrement</button>
    </div>
}

// In this, count variable does not need to be passed as a prop to Count component so that it can be passed to CountRenderer and Buttons component

export default AppContextAPI