// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

// Also tell the user if they are legal to vote or not

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
  function eligibleToVote() {
    return user.age > 18;
  }
  let vote = eligibleToVote() ? "Eligible " : "Not Eligible ";
  console.log(
    "Hi " +
      sal +
      " " +
      user.name +
      ", your age is " +
      user.age +
      ". You are " +
      vote +
      "To Vote"
  );
}
let user = {
  name: "Pratima",
  age: 21,
  gender: "Female",
};
greet(user);
