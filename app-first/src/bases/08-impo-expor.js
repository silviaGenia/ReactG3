import frutas, { verduras } from './data/frutas'

const getFrutasById = (id) => frutas.find((fruta) => fruta.id === id)

console.log(getFrutasById(2))

const getFrutasByOwner = (color) => frutas.filter((fruta) => fruta.color === color)

console.log(getFrutasByOwner("rojo"))

console.log(verduras)