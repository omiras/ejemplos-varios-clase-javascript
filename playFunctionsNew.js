// declarar una función con la palabra reserva function y darle un nombre
function obtenerIva(precio) {
  let iva = precio * 0.16;
  return iva;
}

// guardar la función en una variable
const dameIva = function (precio) {
  let iva = precio * 0.16;
  return iva;
};
console.log("dameIva: ", dameIva(100));

// función flecha para definir la misma función
const dameIvaArrow = (precio) => {
  let iva = precio * 0.16;
  return iva;
};

console.log("dameIvaArrow: ", dameIvaArrow(100));

// arrow function simplificada
const arrowFuncSimple = (precio) => precio * 0.16;

console.log("arrowFuncSimple: ", arrowFuncSimple(100));
