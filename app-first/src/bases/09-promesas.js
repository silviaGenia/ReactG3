const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    //console.log("2 segundos despues")
    resolve()
  }, 2000)
})
miPromesa.then(() => {
  console.log("then de la promesa")
})
//----

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succes = true
      if (!succes) {
        resolve("Operacion exitosa")
      } else {
        reject("Ocurrio un error")
      }
    }, 2000)

  })
}

fetchData()
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })

  ///----
  const fetchData1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("operacion exitosa")
      }, 2000)
    })
  }
  
  
  const procesoData = async () => {
    try {
      const data = await fetchData1()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  procesoData()