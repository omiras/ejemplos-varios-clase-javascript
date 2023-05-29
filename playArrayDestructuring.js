// we have an array with the name and surname
let arr = ["John", "Smith", 23];

// destructuring assignment
// let firstName = arr[0];
// let lastName = arr[1];
// let age = arr[2];

// Creamos una variable que se llama 'firstName', y le asignamos el valor de arr[0]
// Creamos una variable que se llama 'surname', y le asignamos el valro de arr[1]
let [firstName, surname] = arr;
console.log(firstName, surname);

let [, , age] = arr;
console.log(age);

//console.log(firstName, lastName);

// let [firstName, surname] = "John Smith".split(' ');
// alert(firstName); // John
// alert(surname);  // Smith

// let [firstName, , title] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];
// console.log(firstName, title);

// let guest = "Jane";
// let admin = "Pete";

// // Let's swap the values: make guest=Pete, admin=Jane
// [guest, admin] = [admin, guest];

// console.log(`${guest} ${admin}`); // Pete Jane
