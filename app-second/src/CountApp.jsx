import { useState } from "react"


export const CountApp = ({ value }) => {

  const [count, setCount] = useState(value)


  const handleAdd = () => {
    //console.log("Clase")
    //count++
    setCount(count + 1)
  }

  const handleResta = () => {
    if (count > value) {
      setCount(count - 1)
    }
  }

  const handleReset = () => {
    setCount(value)
  }

  return (
    <>
      <h2>Contador</h2>
      <h2>{count}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleResta}>-1</button>
      <button onClick={handleReset}>Reinicio</button>
    </>
  )
}




