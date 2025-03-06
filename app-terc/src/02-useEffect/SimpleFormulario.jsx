import { useState } from "react"


export const SimpleFormulario = () => {

  const [formState, setFormState] = useState({
    username: "karla",
    email: "karla@gmail.com"
  })

  const { username, email } = formState


  const onInputChange = ({ target }) => {
    const { name, value } = target
    console.log({ name, value })
  }


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
    </>
  )
}
