import { useEffect, useState } from 'react';

function useInterval(fn, timeout) {
    useEffect(() => {
        const value = setInterval(() => {
            fn()
        }, timeout)

        return () => {
            clearInterval(value)
        }
    }, [fn, timeout])
}

function Interval() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}



export default Interval