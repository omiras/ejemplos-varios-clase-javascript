let persona = {
  nombre: "Marcos",
  edad: 24,
  accedeUniversidad: true,
};

let animal = {
  nombre: "Nerio",
  edad: 21,
  accedeUniversidad: true,
};

// Operador de desestructuración
// Del objeto persona, quedate con la propiedad nombre. Y asigna su valor a esta variable que he creado y que se llama igual
let { nombre, edad } = animal;

console.log("ES6 destruct:", nombre, edad);
