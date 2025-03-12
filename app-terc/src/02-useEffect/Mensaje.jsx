import { useEffect } from "react"


export const Mensaje = () => {

  useEffect(() => {
    console.log("Mensaje Montado")

    return () => {
      console.log("Mensaje Desmontado")
    }
  }, [])


  return (
    <>
      <h3>Usuario ya Existe</h3>
    </>
  )
}
