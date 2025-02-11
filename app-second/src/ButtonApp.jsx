import { useState } from "react"

export const ButtonApp = () => {

  const [click, setClick] = useState("Iniciar")


  const handleclick = () => {
    setClick(click === "Iniciar" ? "Detener" : "Iniciar")
  }
  return (
    <>
      <h2>Boton</h2>
      <button onClick={handleclick}>{click}</button>
    </>
  )
}

//Mostra / Ocultar un Parrafo
