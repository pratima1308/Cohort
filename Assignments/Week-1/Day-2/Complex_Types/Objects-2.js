// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user) {
  let sal;
  switch (user.gender) {
    case "Male":
      sal = "'Mr.";
      break;
    case "Female":
      sal = "Mrs";
      break;
  }
  console.log("Hi " + sal + " " + user.name + ", your age is " + user.age);
}
let user = {
  name: "Pratima",
  age: 21,
  gender: "Female",
};
greet(user);
