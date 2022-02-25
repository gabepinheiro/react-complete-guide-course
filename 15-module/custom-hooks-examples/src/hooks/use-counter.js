import { useState, useEffect } from 'react'

export const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCounter((prevState) => forwards
        ? prevState + 1
        : prevState - 1
      )
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [forwards])

  return counter
}
