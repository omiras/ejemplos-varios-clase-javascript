let movimientos = [4000, -400, 300, -100, -100];

// recorrer array con un for..in (cuando te interesa por algún motivo conservar el índice)
// for (let i in movimientos) {
//   console.log(movimientos[i]);
// }

// recorrer array con un for..of
// for (let x of movimientos) {
//   console.log(x);
// }

// forEach - recorre el array. DENTRO DE ESE PARÁMETRO VA UNA VARIABLE DE TIPO FUNCTION
// La función que va dentro del forEach se llama función de callback, y es invocada tantas veces como elementos hay en el array
movimientos.forEach((m, index) => {
  console.log(`Estamos en el índice ${index}`);
  console.log(m);
});
