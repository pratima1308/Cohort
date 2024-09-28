// Write a function called sum that finds the sum from 1 to a number

function sum(n) {
  let summ = 0;
  for (let i = 0; i < n; i++) {
    summ = summ + i;
  }
  console.log(summ);
}
let msg = sum(5);
console.log(msg);
