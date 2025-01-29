const activo = true

let mensaje

if (!activo) {
  mensaje = "activo"
} else {
  mensaje = "Inactivo"
}

console.log(mensaje)


const mensaje1 = activo ? "activo" : "Inactivo"
console.log(mensaje1)

const mensaje2 = !activo && "activo"
console.log(mensaje2)