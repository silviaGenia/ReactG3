const persona = {
  nombre: "Karla",
  apellido: "Herrera",
  edad: 12
}


console.log(persona)
console.log(persona.nombre)
console.log(persona.apellido)



const { nombre, apellido } = persona
console.log(nombre, apellido)


const retornaPersona = (usuario) => {
  const { nombre } = usuario
  console.log(nombre)
}
retornaPersona(persona)



const retornaPersona1 = ({ apellido }) => {
  console.log(apellido)
}
retornaPersona1(persona)



const useContext = ({ apellido, nombre }) => {
  return {
    primerNombre: nombre,
    primerApellido: apellido
  }
}
const { primerApellido, primerNombre } = useContext(persona)
console.log(primerNombre, primerApellido)