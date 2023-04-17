// crar un objeto gatoArthur

// propiedad: valor
let gatoArthur = {
  name: "Felipe",
  favFood: "Purina One",
  age: 6,
  isFullVaccinated: true,
  favInsects: ["dragonfly", "butterfly", "cockroach"],
};

// cafetera

let cafetera = {
  color: ["blanca", "negra"],
  potenciaEnergetica: "1500W",
  precio: {
    unidad: 69,
    iva: 21,
    moneda: "€",
  },
};

// como muestro por el terminal un objeto
console.log("cafetera: ", cafetera);

// como muestro solo una propiedad del objeto
// usamos el . : nombredelobjeto.nombredelapropiedad

console.log("potencia cafetera", cafetera.potenciaEnergetica);

// que voy a consoleloguear?
let potencia = cafetera.potenciaEnergetica;
console.log("potencia cafetera-2", potencia);

// como actualizo la potencia de la cafetera?
// Modificar la propiedad de un objeto
// la potencia es de 1200W
cafetera.potenciaEnergetica = "1200W";

// Ejercicio: como se haría para mostrar solamente el IVA de esta cafetera
console.log("iva cafetera", cafetera.precio.iva);

// Manera alternativa de acceder a las propiedades de un objeto
console.log(
  "manera alternativa acceder potencia",
  cafetera["potenciaEnergetica"]
);

// Cuidado, si no poneis bien el nombre de la propiedad
console.log("quiero acceder al precio", cafetera.price);
