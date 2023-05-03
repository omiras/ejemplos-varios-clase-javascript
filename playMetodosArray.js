// Los métodos de array sirven para recorrer los array con diferentes objetivos (Daniel dixit)

// Existe algun pez cuyo nombre tenga 4 carácteres o menos?

let peces = ["Dory", "Nemo", "Payasín"];

let pezEncontrado = peces.some(function (p) {
  return p.length <= 3;
});
console.log(pezEncontrado);

// Métodos de array con index
const letters = ["a", "b", "c", "d"];

letters.forEach((element) => console.log(element)); // Devuelve 'a' / 'b' / 'c' / 'd'
letters.forEach((element, index) => console.log(element, index)); // Devuelve 'a' 0 / 'b' 1 / 'c' 2 / 'd' 3
letters.forEach((element, index, array) => console.log(array)); // Devuelve 'a' / 'a' / 'a' / 'a'
