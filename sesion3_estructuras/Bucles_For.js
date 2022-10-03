//Bucles For
for(let i = 0; i < 10; i++){
  console.log(i)
}

let lista = [1,4,6,8,7,3,2,0]

for (let i = 0; lista.length; i++){
  console.log(lista[i])
}

//Estructura for of
for (let valor of lista) {
  console.log(valor)
}

//Estructura forEach
lista.forEach (valor =>{
  console.log(valor)
})

//Estructura ForIn
let persona = {
  nombre:"Gonzalo",
  apellidos:"Gonzalez",
  edad: 24,
  isDevelop: true
}


for (let propiedad in persona) {
  console.log(propiedad) //Atributos
  console.log(persona) //Valor de los atributos
  }
