//Casos muy específicos - break, continue
let lista = [1,2,3,4,5,6,7,8];

for(var i = 0; i < lista.length; i++){
  if(lista[i] === 3){
    continue; //Lo que hace es reiniciarlo
  }  
  var j = 50;
  const k = 100;
  console.log(k);
  console.log(lista[i]);

  if (lista[i] > 5) {
    break; //Skipear todo lo demas
  }
}

//Cual es el ámbito de un bucle
console.log(i);
console.log(j);
