// Puedo entrar a la discoteca?

let edad = 18;

if (edad >= 18) {
  console.log("Puedes entrar");
}

// otra manera
let puedoEntrar = edad >= 18;

// Si la declaración de la renta me sale positiva, tengo que pagar, si no, me devuelven dinero

let resultadoDeclaracion = -10; // euros
// Si la expresión que hay antes del '?' se evalua como true, te quedas con el valor de antes de los dos puntos, si no te quedas con lo que hay detrás de los dos puntos
let mensaje = resultadoDeclaracion > 0 ? "Tienes que pagar" : "Toca a devolver";

console.log(mensaje);
