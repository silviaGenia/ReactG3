let nombre = "Karla"
let apellido = "Herrera"

let nombrecompleto = nombre + ' ' + apellido

console.log(nombrecompleto)


let nombrecompleto1 = `El nombre completo es: 
${nombre}
${apellido}
${1 + 2}`

console.log(nombrecompleto1)



function getSaludo() {
  return 'Buenas noches!!'
}

console.log(`Este es el mensaje de la funcion: ${getSaludo()}`)