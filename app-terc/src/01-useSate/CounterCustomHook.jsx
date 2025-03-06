import { useCounter } from "../hook/useCounter"

export const CounterCustomHook = () => {

  const { counter, increment, reset, decrement } = useCounter()

  return (
    <>
      <h1>Counter con Hook: {counter}</h1>
      <hr />
      <button onClick={() => increment(2)} className="btn btn-primary">+1</button>
      <button onClick={reset} className="btn btn-primary">reset</button>
      <button onClick={() => decrement(5)} className="btn btn-primary">-1</button>
    </>
  )
}
