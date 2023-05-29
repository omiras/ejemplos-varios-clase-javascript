/** Partidos políticos */

// let ganador2017;

// ganador2017 = 'Els Comuns';
// console.log("🚀 ~ file: copia-valor-referencia.js:6 ~ ganador2017:", ganador2017);

// ganador2017 = "El PSOE";
// console.log("🚀 ~ file: copia-valor-referencia.js:6 ~ ganador2017:", ganador2017);

// let paridos2017 = ["PSOE", "PP", "Comuns", "ERC", "Ciudadanos"];
// console.log(
//   "🚀 ~ file: copia-valor-referencia.js:12 ~ paridos2017:",
//   paridos2017
// );

// // copiar para tener un registro histórico
// let paridos2023 = paridos2017;
// paridos2023.pop();
// console.log(
//   "🚀 ~ file: copia-valor-referencia.js:16 ~ paridos2023:",
//   paridos2023
// );

// // Ahora quiero volver a consultar los paridos del 2017.
// console.log("paridos2017: ", paridos2017);

// objeto partido

// let partido1 = {
//   nombre: "Magdalena",
//   nivelDignidad: 5,
// };
// // escinde del partido de las Magdalenas
// let partido2 = partido1;

// partido2.sede = "C/ Garbanzo 4";
// console.log("partido2: ", partido2);
// console.log("partido1: ", partido1);

// let edad = 20;
// let edad_otra = edad;
// edad = edad + 100;

// console.log("edad_otra", edad_otra);
// console.log("edad", edad);

let partidos2017 = ["PSOE", "PP", "Comuns", "ERC", "Ciudadanos"];
console.log(
  "🚀 ~ file: copia-valor-referencia.js:50 ~ partidos2017:",
  partidos2017
);

// COPIA el array partidos2017 en la variable partidos2023
let partidos2023 = [...partidos2017];
partidos2023.pop();
console.log(
  "🚀 ~ file: copia-valor-referencia.js:53 ~ partidos2023:",
  partidos2023
);

let partido1 = {
  nombre: "Magdalena",
  nivelDignidad: 5,
};

// quiero copiar el objeto pero quiero añadirle una nueva propiedad, la sede del partido

let partido2 = {
  ...partido1, // copiame todas las propiedades
  sede: "c/ Garbanzo 4",
};
console.log("partido2", partido2);
