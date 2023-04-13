/** Rama de condicionales */

/** Una persona que tiene menos 500 euros en la cuenta es pobre, si tienes menos de 25000 debe estar trabajando, si tienes mas en cualquier otro caso tiene mucho dinero */

let dinero = 50000;

if (dinero <= 500) {
  console.log("Eres pobre");
} else if (dinero <= 25000) {
  console.log("Eres asalriado");
} else {
  console.log("Eres rico");
}

// Te podemos hacer el seguro de vida si tienes entre 18 y 69 años

let edad = 69;

if (edad >= 18 && edad <= 69) {
  console.log("Te podemos hacer el seguro de vida!");
}

// hay veces que con solo se cumpla una de las condiciones, ya te vale para hacer ejecutar/hacer algo . Operador OR ||

// Para entrar en Singulars o debes estar en el paro o tener un sueldo bruto anual menor de 10000

let estoyParo = false;
let sueldoBruto = 1000;

if (estoyParo || sueldoBruto < 10000) {
  console.log("Puedes entrar en Singulars");
}

// Operador ! (NOT)

// Si NO estoy enfermo, vendré a clase
let estoyEnfermo = false;

if (!estoyEnfermo) {
  console.log("Vengo a clase!");
}

