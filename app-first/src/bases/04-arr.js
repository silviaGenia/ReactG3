const arreglo = []

//console.log(arreglo)
//arreglo.push(1)
//arreglo.push(2)
//console.log(arreglo)

const arr = [1, 2, 3, 4, 5]
console.log(arr)


const arr2 = [...arr, 6]
console.log(arr2)


const arr3 = arr2.map(function (numero) {
  return numero * 2
})
console.log(arr3)