// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

function solve(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gender === "male" && arr[i].age > 18) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
const users = [
  {
    name: "Ram",
    age: 21,
    gender: "male",
  },
  {
    name: "Priya",
    age: 21,
    gender: "female",
  },
  {
    name: "Raman",
    age: 11,
    gender: "male",
  },
];
console.log(solve(users));
