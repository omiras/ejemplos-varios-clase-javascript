// representar una discoteca en un objeto

let discoteca = {
  nombre: "Apolo",
  capacidadMaxima: 500,
  aforoActual: 0,
  dresscodeProhibido: ["chancletas", "bambas", "albornoz"],
  edadMinima: 18,
  saludoPortero: function (nombre) {
    return "Buenas noches, " + nombre + " ¿DNI?";
  },
  entrarCliente: function () {
    // incrementar en 1 el aforoActual
    this.aforoActual = this.aforoActual + 1;
  },
};

console.log("saludar al portero: ", discoteca.saludoPortero("Nordin"));

// En ocasiones te interesa a partir de una función modificar alguna propiedad del objeto
// Cada vez que entre alguien en la discoteca, debemos incrementar en 1 el aforoActual

// Entra alguien
discoteca.entrarCliente();
