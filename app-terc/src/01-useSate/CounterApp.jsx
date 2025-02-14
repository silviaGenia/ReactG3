import { useState } from "react"


export const CounterApp = () => {

  const [state, setState] = useState({
    counter1: 20,
    counter2: 10,
    counter3: 30
  })

  const { counter1, counter2, counter3 } = state

  const handleAdd = () => {
    setState({
      ...state,
      counter1: counter1 + 1,
    })
  }
  return (
    <>
      <h1>Contador</h1>
      <h2>contando: {counter1}</h2>
      <h2>contando: {counter2}</h2>
      <h2>contando: {counter3}</h2>
      <button className="btn btn-success" onClick={handleAdd}>+1</button>
      <p>compras</p>
    </>
  )
}
