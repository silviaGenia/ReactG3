
export const CounterApp = () => {
  const click = () => {
    console.log("Buenas noches clases")
  }
  return (
    <>
      <h2>Eventos</h2>
      <button onClick={click}>Enviar</button>
    </>
  )
}
