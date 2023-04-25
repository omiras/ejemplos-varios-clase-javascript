/**
 * Quiero almacenar todos los movimientos  de mi cuenta bancaria
 */

let ingreso1 = 4000;
let retirada1 = -400;
let ingreso2 = 300;
let retirada2 = -100;
let retirada3 = -100;

// Arrays o arreglos o vectores, tienen la finalidad de agrupar información (normalmente) relacionado

let movimientos = [4000, -400, 300, -100, -100];
console.log(movimientos);

// Conjunto de comidas favoritas
let comidasFavoritas = ["queso", "tomate", "aceitunas"];

// caracteristicas de una mascota: nombre, comida favorita, edad, estaBienVacunado, insectos gusta comer

let gatoArthur = [
  "Felipe",
  "Purina One",
  6,
  true,
  ["libelulas", "mariposas", "cucarachas"],
];

// Acceder a alguna de sus posiciones
// Accedo al nombre del gato de Arthur?
console.log("nombre del gato:", gatoArthur[0]);

// Si quisiera saber los bichos que le gusta comer a Felipe
console.log("bichos favoritos", gatoArthur[4]);

// si quisieramos acceder al primer bicho favorito de Felipe (libelulas)
console.log("1er bicho favorito: ", gatoArthur[4][0]);

// añadir un elemento a un array
// Hago nuevo ingreso bancario 333

movimientos.push(333);
console.log("Mis movimientos actualizados", movimientos);

// LAs aceitunas ya no las quiero
comidasFavoritas.pop();
console.log("Mis comidas favoritas ahora son: ", comidasFavoritas);

// Quiero sumar todos mis movimientos bancarios para ver que saldo tengo
// Tengo que sumar cada uno de los ingresos y de las retiradas para obtener el saldo
let saldo = 0;

for (let i = 0; i < movimientos.length; i++) {
  let movimientoActual = movimientos[i];

  // sumar cada movimiento al saldo
  saldo = saldo + movimientoActual;

  console.log(movimientoActual);
}

console.log(" Saldo actual:", saldo);


<p class="pull">lorem ipsum</p>