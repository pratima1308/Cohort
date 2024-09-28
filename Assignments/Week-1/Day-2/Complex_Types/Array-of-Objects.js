// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

function solve(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age > 18) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
const users = [
  {
    name: "Ram",
    age: 31,
  },
  {
    name: "Priya",
    age: 19,
  },
  {
    name: "Raman",
    age: 11,
  },
];
console.log(solve(users));
