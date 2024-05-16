import React, { useEffect, useState } from 'react'
import './App.css'

function CustomHooks() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000)
  }, [])

  return (
    <>
      {render ? <MyComponent /> : <div></div>}
    </>
  )
}

function MyComponent() {
  useEffect(() => {
    // Perform setup or data fetching here
    console.error("component mounted");

    return () => {
      // Cleanup code (similar to componentWillUnmount)
      console.log("component unmounted");
    };
  }, []);

  // Render UI
  return <div>
    From inside my component
  </div>
}

export default CustomHooks
