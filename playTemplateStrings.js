/**
 * Trabajar con strings es un egorro. Tienes que usar el operador de concatenar para crear string complejos .
 */

let edad = 40;
let nombre = "Mad Max";

let mensaje = `Hola me llamo         ${nombre.slice(1, -1)} y mi edad es ${
  edad + 10
}`;
console.log(mensaje);
