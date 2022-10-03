  let unidades = 0;
  let decenas = 0;
  bucledecenas: while (true) {
    bucleUnidades: while (true) {
      console.log(`El numero actual es: ${decenas} ${unidades} `);
      unidades++;
      if (unidades == 10) {
        unidades = 0;
        break bucleUnidades;
      }
      if (decenas == 2) {
        break bucledecenas;
      }
    }
    decenas++;
  }
  console.log("Ya hemos terminado")


