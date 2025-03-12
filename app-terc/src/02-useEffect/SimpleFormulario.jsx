import { useEffect, useState } from "react"
import { Mensaje } from "./Mensaje"


export const SimpleFormulario = () => {

  const [formState, setFormState] = useState({
    username: "karla2",
    email: "karla@gmail.com"
  })

  const { username, email } = formState


  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    //console.log("useEffect Llamando!!!!")
  }, [])

  useEffect(() => {
    //console.log("useEffect Llamando!!!!")
  }, [formState])

  useEffect(() => {
    //console.log("email cambiando!!!!")
  }, [email])

  return (
    <>
      <h1>Formulario</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="name@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "karla2" && <Mensaje />}
    </>
  )
}
