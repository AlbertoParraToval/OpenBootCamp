//breaks y continue
// labels
let unidades = 0;
let decenas = 0;

bucleDecenas : while(true) {
  bucleUnidades: while (true) {
    console.log(`El número es: ${decenas}${unidades}`)
    unidades ++
    if (unidades === 10) {
      unidades = 0
      break bucleUnidades
    }
  }
  decenas ++
  if (decenas === 2) {
    console.log(`El número es: ${decenas}${unidades}`)
    break bucleDecenas
  }
}
console.log("Ya hemos terminado")