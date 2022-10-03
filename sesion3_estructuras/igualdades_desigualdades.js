//Comparaciones

//Igualdad
if (5 == 5) {
  console.log("5 es igual a 5")
}

if (5 === 5) {
  console.log("5 es muy igual a 5")
}

let a = 5;
let b = 5;

//Igualdad debil
if (a == b) {
  console.log("A es igual a b - Débil")
}

if (a === b) {
  console.log("A es igual a b - Fuerte")
}

// == sólo compara el valor
// === compara el valor y el tipo 


let c = 4;
let d = 10;

//Desigualdades
if (c != d) {
  console.log("c es diferente a d - Débil")
}

if (c !== d) {
  console.log("c es diferente a d - Fuerte")
}

let max = 10;
let min = 5;

if (max > min) {
  console.log("Max es mayor que Min")
} 

if (min > max) {
  console.log("Max es menor que Min")
}
