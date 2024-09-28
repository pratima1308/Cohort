// Write a function that takes a user as an input and greets them with their name and age

function greet(user) {
  console.log("Hi " + user.name + ", your age is " + user.age);
}
let user = {
  name: "Pratima",
  age: 21,
};
greet(user);
