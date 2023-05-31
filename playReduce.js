const numbers = [1, 2, 3];

function myFunc(total, num) {
  // cual es la suma acumulada para ti hasta el momento?
  return total + num;
}

const total = numbers.reduce(myFunc, 0);
console.log(total);
