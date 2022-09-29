//Definición de variables
var variable; //Especie de caja donde se almacena un valor que puede ser modificado.
let variableLet = "Soy una varible"

const constante = "Hola soy una constante" //No se puede reasignar su valor principal.

console.log(constante);
//constante = "Adios" //Nos da un error

var a = 1;
console.log(a); 

a = 5;
console.log(a);

let b = 3;

b= 5;
console.log(b);

var variable = "Hola soy una variable VAR"

for (var i = 0; i < a; i++){
  let variableLet = "Soy la segunda variable LET"
}
console.log(variableLet);

//La principal diferencia entre let y var es que var afecta en todo el codigo y let solo en el trozo de codigo que se encuentra.

console.log(typeof variableLet)