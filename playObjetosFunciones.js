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
  añadirDresscodeProhibido: function (roba) {
    // 'bañador', 'traje esqui'
    // 1 línea de código, actualizame la propiedad dresscodeProhibido añadiendo al array el valor de la variable dress
    this.dresscodeProhibido.push(roba);
  },
};

console.log("saludar al portero: ", discoteca.saludoPortero("Nordin"));

// En ocasiones te interesa a partir de una función modificar alguna propiedad del objeto
// Cada vez que entre alguien en la discoteca, debemos incrementar en 1 el aforoActual

// Entra alguien
discoteca.añadirDresscodeProhibido("bañador");
discoteca.añadirDresscodeProhibido("traje esqui");
discoteca.añadirDresscodeProhibido("puño americano");

console.log(discoteca.dresscodeProhibido);
