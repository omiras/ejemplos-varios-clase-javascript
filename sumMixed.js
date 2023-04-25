function sumMix(x) {
  let suma = 0;

  /** Codificar a partir de aquí */

  // queremos sumar todo el array asi que escribimos un bucle que recorra todo el array
  x.forEach((numero) => {
    suma += +(numero);
  });

  return suma;
}

// en el terminal verás:
//   console.log(sumMix([9, 3, "7", "3"])); // 22
//   console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); //42
console.log("resultado suma: ", sumMix(["3", 1, 333])); // 4
//   console.log(sumMix([])); // 0
