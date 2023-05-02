/**
 * Completa el cuerpo de la función del forEach para crear un objeto para cada elemento del array con el nombre de la persona. Crear objetos: https://www.w3schools.com/js/js_objects.asp
 */

const names = ["John", "Sarah", "Mike"];
let people = [];
names.forEach((name) => {
  // 1 línea de código
  let person = {
    name: name,
    long: name.length,
  };
  people.push(person);
});
console.log(people); // Output: [{name: "John", long: 4}, {name: "Sarah", long: 5}, {name: "Mike", long:4}]
