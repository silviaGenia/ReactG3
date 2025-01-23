console.log("Clase Noche")

const persona = {
  nombre: 'Carlos',
  apellido: 'Herrera',
  edad: 12,
  direccion: {
    ciudad: 'Sucre'
  }
}


//console.table(persona)

const persona2 = { ...persona }
persona2.nombre = "Dayana"
console.log(persona)
console.log(persona2)