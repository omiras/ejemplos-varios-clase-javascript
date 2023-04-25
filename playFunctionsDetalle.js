/**
 * El nombre de la función debería representar el trabajo que realiza.
 * Declrar función:
 */

/**
 * Vamos a parametrizar esta función para que salude a una persona en concreto
 */

function saludar(persona) {
  // Como modificarias esta función si la persona que me pasan es "Marcos" para que solo por conosole.log "Que pasó mano?"

  if (persona === "Marcos") {
    console.log("Que pasó mano?");
  } else {
    console.log("Hola Hola!");
    console.log("Tudo bem? " + persona);
    console.log("En realidad me importa un sebillo!");
  }
}

saludar("Marcos");

/**
 * Voy a crear una función que dado el precio de un producto me devuelva el IVA 16%
 */
function obtenerIva(precio) {
  let iva = precio * 0.16;
  return iva;
}

obtenerIva(1);
console.log(iva);

let precioPatatas = 200;
let ivaPatatas = obtenerIva(precioPatatas);

console.log("El precio total: ", precioPatatas + ivaPatatas);

/**
 * Queremos crear una función esta vez que reciba dos parámetros
 *
 * 1. Si estoy en el paro
 * 2. Ingresos brutos
 *
 * La función se llamará puedoMatricularmeSingulars , y devolver true si te puedes matricuar y false si no te puedes matricular
 *
 * Te puedes matricular si estas en el paro Y si cobras menos de 10000 €
 */

function puedoMatricularmeSingulars(estoyParo, ingresosBrutos) {
  if (estoyParo && ingresosBrutos < 10000) {
    return true;
  } else {
    return false;
  }
}

let personaNonGrata = puedoMatricularmeSingulars(false, 15000); // No, no debería devolver false
console.log("puede persona Non Grata hacer Singulars? ", personaNonGrata);

let personaPobre = puedoMatricularmeSingulars(true, 100); // Si, debería devolver true
console.log("puede persona pobre hacer Singulars? ", personaPobre);
