/**
 * Buscar algo en un array
 */

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

// En todos estos movimientos, hay una retirada de dinero? dame la primera que encuentras

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

// HOMEWORK: eliminar la variable hayRetirada y que el algoritmo funciona igual
