const notas = ['A', 'B', 'C', 'D', 'E', 'F']

console.log(notas)
console.log(notas[0])
console.log(notas[5])

const [, , p] = notas
console.log(p)


const retornaArreglo = () => {
  return ["ABC", 123]
}

const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)



const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Buenas Noches")
    }
  ]
}

const [nombre, setNombre] = useState("Karla")

console.log(nombre)
setNombre()