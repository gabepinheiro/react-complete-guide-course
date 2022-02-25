import { useState, useEffect } from 'react'

export const useCounter = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCounter((prevState) => prevState + 1)
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return counter
}
