
function saludar(nombre) {
  return `Hola mi nombre es: ${nombre}`
}

console.log(saludar("karla"))



const saludar1 = function (nombre) {
  return `Hola mi nombre es: ${nombre}`
}

console.log(saludar1("Carlos"))


const saludar2 = (nombre) => {
  return `Hola mi nombre es: ${nombre}`
}

console.log(saludar2("Juans"))


const saludar3 = (nombre) => `Hola mi nombre es: ${nombre}`

console.log(saludar3("Kevin"))

const getUser = () => ({
  id: 1234,
  nombre: "Kevin"
})

console.log(getUser())