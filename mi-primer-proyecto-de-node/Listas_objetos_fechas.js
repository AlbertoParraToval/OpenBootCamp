//Listas, arrays o arreglo
const lista1 = [1, undefined, "hola", null];
const lista2 = new Array(2, undefined, "hola", null);
const lista3 = new Array();
lista3[0]="Soy el primero de la lista 3"
const lista4 = new Array(lista1, lista2, lista3)

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//Objetos
const movil = {
  altura:4,
  anchura:5,
  marca:"Xiaomi",
  isWhite: false,
  contactos: ["Alberto", "Dolores", "Antonio"],
  tarjeta:{
    marca:"Sandisk", 
    almacenamiento: 32
  }
}
//Podemos modificar el valor del atributo original
movil.year = 2019;
console.log(movil.altura, movil.contactos, movil.tarjeta)
console.log(movil.year)

//Fechas
//Librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10) //Utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 20 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2000 ,0 , 18);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth();
const anyo = ahora.getFullYear();