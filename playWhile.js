// bucl while
// let i = 0; // Inicialización de la variable contador

// // Condición: Mientras la variable contador sea menor de 5
// while (i < 5) {
//   console.log("Valor de i:", i);

//   i = i + 1; // Incrementamos el valor de i
// }

// // conviertelo a un for
// for (let i = 0; i < 5; i++) {
//   console.log("Valor de i del for: ", i);
// }

// parchis: hasta que no saque un 5, no puedo salir de la casilla de salida

let tiradaDados = 1;
console.log("Tirada inicial: ", tiradaDados);

while (tiradaDados != 5) {
  tiradaDados = Math.floor(Math.random() * 6) + 1;
  console.log("Tirada de dadtos: ", tiradaDados);
}

console.log("Ya he podido salir!!");
