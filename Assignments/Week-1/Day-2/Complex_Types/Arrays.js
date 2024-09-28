// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function even(arr) {
  return arr.filter((num) => num % 2 === 0);
}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(even(num));
