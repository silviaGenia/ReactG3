import { useState } from "react"


export const JuegoLuces = () => {

  const [luces, setLuces] = useState({
    cosina: false,
    dormitorio: false,
    patio: false
  })

  return (
    <>
      <h1>Juego de Luces</h1>
    </>
  )
}
