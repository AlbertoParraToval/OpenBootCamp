/*Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)*/

console.log("Ejercicio 2")

const perfil = {
  name:"Alberto Parra Toval",
  age: 18,
  isDeveloper: true,
  birthDate: new Date (2003,10,08),
  favBook : {
    tittle :"El arbol de la ciencia",
    author: "Pío Baroja",
    fecha : new Date (1911),
    url: "https://trabalibros.com/libros/el-arbol-de-la-ciencia-pio-baroja"
  }
}

console.log(perfil)