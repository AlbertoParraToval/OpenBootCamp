//Metodos mas utilizados con cadenas de caracteres de
//Como obtener la longitud de un string de
let str = "Hola soy un string";
console.log(str.length) //Para obtener la longitud de nuestro string

//Obtener partes de cadenas de caracteres 
//slice() substring() substr() 
let slice_str = str.slice(0,8)
console.log(slice_str) 

let substring_str = str.substring(0,8)
console.log(substring_str) 

let substr = str.substr(0,8)
console.log(substr)

//Reemplazar parte del contenido de la cadena de un texto, solo reemplaza la primera instancia
let cadena ="Hola mi nombre es Alberto"
console.log(cadena)
console.log(cadena.replace('Alberto', 'Manolo'))

let text_largo = "lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet "

//Queremos reemplazar x palabras de un texto largo utilizando una expresion regular
console.log(text_largo.replace(/lorem/g, 'manolo'))