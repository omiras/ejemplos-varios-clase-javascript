/**
 * Ya hemos usado funciones de JavaScript
 */

console.log("Hola hola!");

// tenia () , es posibilmente una función
// Math.random()

console.log("bona tarda".toUpperCase());

let movimientos = [
  300, 200, 777, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 250, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 666,
];

let movimientosAbril = [
  -300, 200, 777, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 250, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 666,
];

let movimientosMayo = [
  555, 200, 777, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, -9999, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 250, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200,
  200, 200, 200, 200, 666,
];

function dimeSiHayRetirada(movimientos) {
  // variable para almacenar lo que buscas
  let hayRetirada = false;

  // variable para almacenar la retirada potencial
  let reintegro;

  // posicion inicial del array
  let i = 0;

  while (!hayRetirada && i < movimientos.length) {
    // como sabemos si una poscion del array es una retirada?
    let posicionActual = movimientos[i];

    // actualizar la variable que me indica si he encontrado una retirada o no
    // tenemos que comprobar si la posición actual es un numero negativo
    if (posicionActual < 0) {
      // he encontrado la retirada! que variable debo actualizar y con que valor para decirle que los hemos encontrado
      hayRetirada = true;
      reintegro = posicionActual;
    }

    // comprobar la siguiente posición
    i++;
  }

  if (hayRetirada) {
    console.log("He encontrado una retirada! Y es de " + reintegro);
  } else {
    console.log("No hay retiradas. que tacaño, no?");
  }
}

console.log("Miramos si hay retirada en los primeros movimientos");
dimeSiHayRetirada(movimientos);

console.log("Miramos si hay retirada en Abril");
dimeSiHayRetirada(movimientosAbril);

console.log("Miramos si hay retirada en Mayo");
dimeSiHayRetirada(movimientosMayo);
